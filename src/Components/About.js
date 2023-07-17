import React, { useState } from "react";
import {
  productInputValues,
  productFormValues,
  postInputValues,
  postFormValues,
  serviceInputValues,
  serviceFormValues,
} from "../Database/input";
import "../Styles/about.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";
import { Modals } from "../Admin/Modals";

export const About = () => {


  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h4>
            <Navbar />
          </h4>
          <hr />
          <h3>About Us</h3>
          
        </div>
      </div>
    </div>
  );
};
