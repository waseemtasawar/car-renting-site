import React, { useEffect, useState } from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import Helmet from "../Helmet/Helmet";
import CommonSection from "./CommonSection";
import axios from "axios";
const AdminData = () => {
  const [Data, setData] = useState([]);
  const [RowData, SetRowData] = useState([]);
  const [ViewShow, SetViewShow] = useState(false);
  const handleViewShow = () => {
    SetViewShow(true);
  };
  const hanldeViewClose = () => {
    SetViewShow(false);
  };
  //---------------------------FOr Edit Model------------------//
  const [ViewEdit, SetEditShow] = useState(false);
  const handleEditShow = () => {
    SetEditShow(true);
  };
  const hanldeEditClose = () => {
    SetEditShow(false);
  };
  //----------------------FOr Delete Model-----------------------//
  const [ViewDelete, SetDeleteShow] = useState(false);
  const handleDeleteShow = () => {
    SetDeleteShow(true);
  };
  const hanldeDeleteClose = () => {
    SetDeleteShow(false);
  };
  //--------------------FOr Add New Data Model------------------/
  const [ViewPost, SetPostShow] = useState(false);
  const handlePostShow = () => {
    SetPostShow(true);
  };
  const hanldePostClose = () => {
    SetPostShow(false);
  };

  //-------------Define here local state that store the form Data---------------//
  const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [fromAdress, setfromAdress] = useState("");
  const [toAdress, settoAdress] = useState("");
  const [issueDate, setdate] = useState("");
  const [issueTime, settime] = useState("");
  // const [discription, setdiscription] = useState("");
  //<<<<<<<<<<----->>>>>>>
  //---------------Id for update record and Delete-----------------//
  const [id, setId] = useState("");
  const [Delete, setDelete] = useState(false);

  const handleSubmite = () => {
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
        alert("Booking Successfully...");
        console.log(data, "userRegister");
      });
  };

  const GetEmployeeData = () => {
    //here we will get all employee data
    const url = "http://localhost:5000/userBooking";
    axios
      .get(url)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status !== "SUCCESS") {
          alert(message, status);
        } else {
          setData(data);
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    const url = `http://localhost:5000/booking/${id}`;
    const datas = {
      fname,
      // lname: lname,
      email,
      phone,
      fromAdress,
      toAdress,
      issueDate,
      issueTime,
    };
    axios
      .put(url, datas)
      .then((response) => {
        const result = response.data;
        const { status, message, data } = result;
        if (status == "SUCCESS") {
          alert(message, status);
        } else {
          alert(message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = () => {
    const url = `http://localhost:5000/booking/${id}`;

    axios
      .post(url)
      .then((response) => {
        const result = response.data;

        const { status, message, data } = result;

        if (status == "SUCCESS") {
          console.log("Waseem");
          alert(message, status);
        } else {
          alert(message);
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    GetEmployeeData();
  }, []);
  return (
    <Helmet title="Admin">
      <CommonSection title="Admin" />
      <section>
        <div className="row">
          <div className="mt-5 mb-4">
            <Button
              variant="primary"
              onClick={() => {
                handlePostShow();
              }}
            >
              <i className="fa fa-plu"></i>
              Add New Customer
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  {/* <th> Name</th> */}
                  <th>Email</th>
                  <th>Number</th>
                  <th>From Address</th>
                  <th>To Address</th>
                  <th>issue Date</th>
                  <th>issue Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((item) => (
                  <tr key={item._id}>
                    <td>{item.fname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.fromAdress}</td>
                    <td>{item.toAdress}</td>
                    <td>{item.issueDate}</td>
                    <td>{item.issueTime}</td>
                    <td style={{ minWidth: 190 }}>
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => {
                          handleViewShow(SetRowData(item));
                        }}
                      >
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="warning"
                        onClick={() => {
                          handleEditShow(SetRowData(item), setId(item._id));
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => {
                          handleViewShow(
                            SetRowData(item),
                            setId(item._id),
                            setDelete(true)
                          );
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* View Modal */}
      <div className="model-box-view">
        <Modal
          show={ViewShow}
          onHide={hanldeViewClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>View Customer Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.fname}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control"
                  value={RowData.email}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  className="form-control"
                  value={RowData.phone}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.fromAdress}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.toAdress}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.issueDate}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.issueTime}
                  readOnly
                />
              </div>

              {Delete && (
                <Button
                  type="submit"
                  className="btn btn-danger mt-4"
                  onClick={handleDelete}
                >
                  Delete Customer
                </Button>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldeViewClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* Submit data Modal in Database */}
      <div className="model-box-view">
        <Modal
          show={ViewPost}
          onHide={hanldePostClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Customer </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  onChange={(event) => setfname(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={(event) => setemail(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-control"
                  onChange={(event) => setphone(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  placeholder="From Address"
                  className="form-control"
                  onChange={(event) => setfromAdress(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  placeholder="To Address"
                  className="form-control"
                  onChange={(event) => settoAdress(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  placeholder="Bookind Date"
                  className="form-control"
                  onChange={(event) => setdate(event.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  placeholder="Booking Time"
                  className="form-control"
                  onChange={(event) => settime(event.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="btn btn-success mt-4"
                onClick={handleSubmite}
              >
                Add Customer
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldePostClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/*  Modal for edit Customer Data */}
      <div className="model-box-view">
        <Modal
          show={ViewEdit}
          onHide={hanldeEditClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Customer </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  onChange={(event) => setfname(event.target.value)}
                  defaultValue={RowData.fname}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  onChange={(event) => setemail(event.target.value)}
                  defaultValue={RowData.email}
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-control"
                  onChange={(event) => setphone(event.target.value)}
                  defaultValue={RowData.phone}
                />
              </div>
              <div className="form-group mt-3">
                <label>From Address</label>
                <input
                  type="text"
                  placeholder="From Address"
                  className="form-control"
                  onChange={(event) => setfromAdress(event.target.value)}
                  defaultValue={RowData.fromAdress}
                />
              </div>
              <div className="form-group mt-3">
                <label>TO Address</label>
                <input
                  type="text"
                  placeholder="To Address"
                  className="form-control"
                  onChange={(event) => settoAdress(event.target.value)}
                  defaultValue={RowData.toAdress}
                />
              </div>
              <div className="form-group mt-3">
                <label>issue Date</label>
                <input
                  type="text"
                  placeholder="Bookind Date"
                  className="form-control"
                  onChange={(event) => setdate(event.target.value)}
                  defaultValue={RowData.issueDate}
                />
              </div>
              <div className="form-group mt-3">
                <label>issue Time</label>
                <input
                  type="text"
                  placeholder="Booking Time"
                  className="form-control"
                  onChange={(event) => settime(event.target.value)}
                  defaultValue={RowData.issueTime}
                />
              </div>
              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Edit Customer
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldeEditClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Helmet>
  );
};

export default AdminData;
