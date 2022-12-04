const { CustomAPIError, createCustomError } = require("../error/custom-error");

const notFound = (req, res, next) => {
  next(createCustomError(`Not found - ${req.originalUrl}`, 404));
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
