const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/test-db");
    console.log("MongoDB connect");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
};
module.exports = connect;
