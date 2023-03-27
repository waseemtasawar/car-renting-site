const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const mongoUrl = "mongodb://0.0.0.0:27017/renting_db";
// "mongodb+srv://Waseem:Wasim1436@cluster0.qitncm8.mongodb.net/BookingCars";

mongoose
  .connect(mongoUrl, {})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const User = require("./users");

///////////------------REGISTER API----------------////////////////
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  const encrypetrdPassword = await bcrypt.hash(password, 10);
  try {
    await User.create({
      fname,
      lname,
      email,
      password: encrypetrdPassword,
    });

    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

///////////------------BOOKING API----------------////////////////

const UserBooking = require("./userBooking");
app.post("/booking", async (req, res) => {
  const {
    fname,
    // lname,
    email,
    phone,
    fromAdress,
    toAdress,
    issueDate,
    issueTime,
    // discription,
  } = req.body;
  try {
    await UserBooking.create({
      fname,
      // lname,
      email,
      phone,
      fromAdress,
      toAdress,
      issueDate,
      issueTime,
      // discription,
    });

    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "Uer Not Found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

///////////------------AFTER LOGIN  API----------------////////////////

app.post("/userData", async (rea, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {}
});

///////////------------Get Recodes----------------////////////////

app.get("/userBooking", async (req, res) => {
  try {
    const result = await UserBooking.find();
    if (!result) {
      res.json({
        status: "FAILED",
        message: "Not Found Record",
      });
    } else {
      res.json({
        status: "SUCCESS",
        message: "Record Found",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

///////////------------Get Single Recodes----------------////////////////

app.get("/userBooking/:id", async (req, res) => {
  try {
    const _id = res.params.id;
    const result = await UserBooking.findById(_id);
    if (!result) {
      res.json({
        status: "FAILED",
        message: "Not Found Record on this Id",
      });
    } else {
      res.json({
        status: "SUCCESS",
        message: "Record Found",
        data: result,
      });
    }
  } catch (error) {
    res.send(error);
  }
});

///////////------------Update Recodes----------------////////////////

app.put("/booking/:id", async (req, res) => {
  try {
    // const _id = res.params.id;
    const result = await UserBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!result) {
      res.json({
        status: "SUCCESS",
        message: "Recode is Not Update Successfully....",
      });
    } else {
      res.json({
        status: "FAILED",
        message: "Record is Update Successfully....",
        data: result,
      });
    }
  } catch (error) {
    res.send(error);
  }
});

///////////------------Delete Recodes----------------////////////////

app.post("/booking/:id", async (req, res) => {
  try {
    // const _id = res.params.id;
    const result = await UserBooking.findByIdAndDelete(req.params.id);
    if (!result) {
      res.json({
        status: "SUCCESS",
        message: "Recode is not Delete Successfully....",
      });
    } else {
      res.json({
        status: "FAILED",
        message: "Record is  Delete Successfully....",
        data: result,
      });
    }
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000, () => {
  console.log("Server Started");
});
