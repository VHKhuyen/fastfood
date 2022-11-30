const { CustomAPIError } = require("../error/custom-error");

const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(err.statusCode)
      .json({ success: false, msg: err.message });
  }
  return res
    .status(500)
    .json({ success: false, msg: "Something went wrong, please try again" });
};

module.exports = { notFound, errorHandler };
