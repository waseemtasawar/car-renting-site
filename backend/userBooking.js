const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
  fname: String,
  // lname: String,
  email: { type: String, unique: true },
  phone: { type: Number, min: 11 },
  fromAdress: String,
  toAdress: String,
  issueDate: String,
  issueTime: String,
  // discription: String,
});

module.exports = mongoose.model("userBooking", userDetailsSchema);
