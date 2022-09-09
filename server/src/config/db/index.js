const mongoose = require("mongoose");
require("dotenv").config()
async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fastfood.fonbe.mongodb.net/fastfood?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

module.exports = { connect };
