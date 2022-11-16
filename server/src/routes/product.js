const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const ProductController = require("../app/controllers/ProductController");

router.get("/", ProductController.index).post("/", ProductController.create);
router
  .delete("/:id", verifyToken, ProductController.delete)
  .patch("/:id", verifyToken, ProductController.update);

module.exports = router;
