import React, { useState } from "react";
import "./admin.css";
import { Sidebar } from "../Comps/Sidebar";
import { ProductTable } from "../Comps/ProductTable";
import { PostTable } from "../Comps/PostTable";
import { ServiceTable } from "../Comps/ServiceTable";
import { useSelector } from "react-redux";

export const Admin = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h3 className="ms-2">Products</h3>
          <hr />
          <ProductTable />
          <br />
          <h3 className="ms-2">Posts</h3>
          <hr />
          <PostTable />
          <br />
          <h3 className="ms-2">Services</h3>
          <hr />
          <ServiceTable />
        </div>
      </div>
    </div>
  );
};
