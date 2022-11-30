const Product = require("../models/ProductModel");
const asyncWrapper = require("../../middleware/async");
const { createCustomError } = require("../../error/custom-error");

class ProductController {
  getProducts = asyncWrapper(async (req, res, next) => {
    const category = req.url.split("/")[1];
    const products = await Product.find({ category: category });
    if (!products) {
      return next(createCustomError("internal server", 500));
    }
    res.json({ success: true, products });
  });

  getAllProducts = asyncWrapper(async (req, res, next) => {
    const products = await Product.find({});
    if (!products) {
      return next(createCustomError("internal server", 500));
    }

    res.json({ success: true, products });
  });

  getSingleProduct = asyncWrapper(async (req, res, next) => {
    const slug = req.url.split("/")[1];
    const products = await Product.findOne({ slug: slug });
    if (!products) {
      return next(createCustomError("internal server", 500));
    }

    res.json({ success: true, products });
  });

  create = asyncWrapper(async (req, res, next) => {
    const { name, description, price, image, category } = req.body;
    //Simple validation
    if (!name || !category || !image || !price) {
      return res.status(400).json({
        success: false,
        message: "Please provides enough information!",
      });
    }
    const newPost = new Product({
      category,
      name,
      description,
      price,
      image,
    });

    await newPost.save();
    return res.json({
      success: true,
      message: "Product create successfully!",
      newPost,
    });
  });

  update = asyncWrapper(async (req, res, next) => {
    const { name, description, price, image, category } = req.body;

    //Simple validation
    if (!name || !category || !image || !price) {
      return res.status(400).json({
        success: false,
        message: "Please provides enough information!",
      });
    }
    const updateProduct = new Product({
      category,
      name,
      description,
      price,
      image,
    });

    const ProductUpdateCondition = { _id: req.params.id, userId: req.userId };

    updateProduct = await Post.findOneAndUpdate(
      ProductUpdateCondition,
      updateProduct
    );
    if (!updateProduct) {
      res.status(401).json({
        success: false,
        message: "product not found or user not authenticated ",
      });
    }
    res.json({ success: true, message: "product updated", updateProduct });
  });

  delete = asyncWrapper(async (req, res, next) => {
    try {
      const ProductUpdateCondition = { _id: req.params.id, userId: req.userId };
      const deleteProduct = await Post.findOneAndDelete(ProductUpdateCondition);
      if (!deleteProduct) {
        res.status(401).json({
          success: false,
          message: "Product not found or user not authenticated",
        });
      }
      res.json({
        success: true,
        message: "Product deleted successfully",
        deleteProduct,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "internal server" });
    }
  });
}

module.exports = new ProductController();
