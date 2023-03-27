const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  lname: { type: String, required: true, trim: true },
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("users", userDetailsSchema);
