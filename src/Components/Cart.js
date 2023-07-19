import React,{useState} from "react";
import "../Styles/about.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";
import { useSelector } from "react-redux";

export const Cart = () => {
  const past = useSelector((state) => state.product.past);
  const current = useSelector((state) => state.product.current);
  const [saved, setsaved] = useState(past[current].products);
  const [saveds, setsaveds] = useState(past[current].services);
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h4>
            <Navbar />
          </h4>
          <hr />
          <h3 className="ms-3">Cart</h3>
          <div className="row mx-1">
            <div className="col">
              <div className="card p-3">
              <h4 className="ms-2">Added Products</h4>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>S. Number</th>
                      <th>Product Name</th>
                      <th>Product Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {saved.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.productName}</td>
                          <td>{item.productPrice}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col">
              <div className="card p-3">
              <h4 className="ms-2">Added Services</h4>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>S. Number</th>
                      <th>Service Name</th>
                      <th>Service Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {saveds.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.serviceName}</td>
                          <td>{item.servicePrice}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
