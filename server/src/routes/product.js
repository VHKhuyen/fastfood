const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const ProductController = require("../app/controllers/ProductController");

router
  .get("/new", ProductController.getAllProducts)
  .get("/burger", ProductController.getProducts)
  .get("/pasta", ProductController.getProducts)
  .get("/drink", ProductController.getProducts)
  .get("/:slug", ProductController.getSingleProduct)
  .post("/", verifyToken, ProductController.create);
router
  .delete("/:id", verifyToken, ProductController.delete)
  .patch("/:id", verifyToken, ProductController.update);

module.exports = router;
