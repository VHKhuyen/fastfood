const authRouter = require("./auth");
const postRouter = require("./post");
const productRouter = require("./product");

function route(app) {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/posts", postRouter);
  app.use("/api/v1/products", productRouter);
}

module.exports = route;
