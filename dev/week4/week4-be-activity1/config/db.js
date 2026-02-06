const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/web-dev");
  console.log(`Connected to database`);
};
 
module.exports = connectDB;
