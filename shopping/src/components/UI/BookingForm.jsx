import React, { useState } from "react";
import "../../Styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
const BookingForm = () => {
  const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [fromAdress, setfromAdress] = useState("");
  const [toAdress, settoAdress] = useState("");
  const [issueDate, setdate] = useState("");
  const [issueTime, settime] = useState("");
  // const [discription, setdiscription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/booking", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname: fname,
        // lname: lname,
        email: email,
        phone: phone,
        fromAdress: fromAdress,
        toAdress: toAdress,
        issueDate: issueDate,
        issueTime: issueTime,
        // discription: discription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={fname}
          onChange={(event) => setfname(event.target.value)}
        />
      </FormGroup>
      {/* <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={(event) => setlname(event.target.value)}
        />
      </FormGroup> */}

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(event) => setphone(event.target.value)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          placeholder="From Address"
          value={fromAdress}
          onChange={(event) => setfromAdress(event.target.value)}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="To Address"
          value={toAdress}
          onChange={(event) => settoAdress(event.target.value)}
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="text"
          placeholder="Bookind Date"
          value={issueDate}
          onChange={(event) => setdate(event.target.value)}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="text"
          placeholder="Booking Time"
          className="time__picker"
          value={issueTime}
          onChange={(event) => settime(event.target.value)}
        />
      </FormGroup>

      {/* <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
          value={discription}
          onChange={(event) => setdiscription(event.target.value)}
        ></textarea>
      </FormGroup> */}
      <div className="payment text-end mt-5">
        <button type="submit">Reserve Now</button>
      </div>
    </Form>
  );
};

export default BookingForm;
