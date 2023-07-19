import React from "react";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";

export const Home = () => {

  
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h4>
            <Navbar />
          </h4>
          <hr />
          <h3>Home</h3>
        </div>
      </div>
    </div>
  );
};
