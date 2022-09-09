const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    CreatedAt:{
      type: Date,
      default: Date.now()
    }
  },
  { timetamps: Date }
);
module.exports = mongoose.model("users", User);
