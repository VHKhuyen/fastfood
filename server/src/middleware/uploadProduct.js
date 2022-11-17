const util = require("util");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const uploadFile = multer({ storage: storage }).single("file");
let singleUploadMiddleware = util.promisify(uploadFile);

module.exports = singleUploadMiddleware;
