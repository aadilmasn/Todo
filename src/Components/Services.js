import React from "react";
import "../Styles/about.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";
import { useSelector } from "react-redux";

export const Services = () => {
  const services = useSelector((state) => state.product.services);
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h4>
            <Navbar />
          </h4>
          <hr />
          <h3 className="ms-3">Services</h3>
          <div className="container text-center">
            <div className="row">
              {services.map((items, index) => {
                return (
                  <div className="col" key={index}>
                    <div
                      className="cDetailsclaard mt-3 p-3  border border-dark-subtle rounded"
                      style={{ width: "12rem" }}
                    >
                      <img
                        src={items.serviceImg}
                        className="card-img-top"
                        alt="product"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      />
                      <div className="card-body">
                        <h6 className="card-title mt-1 text-start">
                          {items.serviceName}
                        </h6>
                        <h6 className="card-text mt-1 text-start">
                          Rs. {items.servicePrice}
                        </h6>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                        >
                          Add to Cart
                        </button>
                        {/* Modal Start  */}
                        <div
                          className="modal fade"
                          id="staticBackdrop"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabIndex="-1"
                          aria-labelledby="staticBackdropLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h1
                                  className="modal-title fs-5"
                                  id="staticBackdropLabel"
                                >
                                  {items.serviceName}
                                </h1>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <img
                                  src={items.serviceImg}
                                  className="card-img-top"
                                  alt="product"
                                />
                                <h4 className="card-text text-start ms-4">
                                  Rs. {items.servicePrice}
                                </h4>
                                <p className="card-text text-start ms-4">
                                  {items.serviceDesc}
                                </p>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-primary"
                                >
                                  Add to Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Modal End  */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
