import React from "react";
import "../Styles/admin.css";
import { Sidebar } from "../Comps/Sidebar";
import { ProductTable } from "../Comps/ProductTable";
import { PostTable } from "../Comps/PostTable";
import { ServiceTable } from "../Comps/ServiceTable";
import { UserTable } from "../Comps/UserTable";

export const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm w-75 p-3">
            <ProductTable />
            <ServiceTable />
            <PostTable />
            <UserTable />
        </div>
      </div>
    </div>
  );
};
