const Product = require("../models/Product");

class ProductController {
  async index(req, res) {
    try {
      const posts = await Product.find();
      res.json({ success: true, posts });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "internal server" });
    }
  }

  async create(req, res) {
    const { name, description, price, image, category } = req.body;

    //Simple validation
    if (!name || !category || !image || !price) {
      return res.status(400).json({
        success: false,
        message: "Please provides enough information!",
      });
    }
    try {
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
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "internal server" });
    }
  }

  async update(req, res) {
    const { name, description, price, image, category } = req.body;

    //Simple validation
    if (!name || !category || !image || !price) {
      return res.status(400).json({
        success: false,
        message: "Please provides enough information!",
      });
    }
    try {
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
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "internal server" });
    }
  }

  async delete(req, res) {
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
  }
}

module.exports = new ProductController();
