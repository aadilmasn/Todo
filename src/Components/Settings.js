import React from "react";
import "../Styles/settings.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";

export const Settings = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h4>
            <Navbar />
          </h4>
          <hr />
          <h3>Settings</h3>
        </div>
      </div>
    </div>
  );
};
