import React from "react";
import ReactDOM from "react-dom/client";
// import App from './AdminPanal/App';
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
// import AdminData from "./components/UI/AdminData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
    {/* <AdminData /> */}
  </Router>
);
