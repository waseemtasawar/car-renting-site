import React, { Component } from "react";
import AdminData from "./AdminData";

class Admin extends Component {
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "./userData");
      });
  }
  render() {
    return (
      <div>
        <AdminData />
      </div>
    );
  }
}

export default Admin;
