import React, { useEffect } from "react";
import "../Styles/admin.css";
import { v4 as uuidv4 } from "uuid";
import { Sidebar } from "../Comps/Sidebar";
import { ProductTable } from "../Comps/ProductTable";
import { PostTable } from "../Comps/PostTable";
import { ServiceTable } from "../Comps/ServiceTable";
import { UserTable } from "../Comps/UserTable";

export const Admin = () => {
  const id = uuidv4();
  useEffect(() => {}, [id]);
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
