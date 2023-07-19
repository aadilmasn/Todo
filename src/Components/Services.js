import React, { useState, useEffect } from "react";
import "../Styles/about.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { userServiceFunc, cartFunc } from "../Redux/action";

export const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.product.services);
  const [saved, setSaved] = useState(services);

  const past = useSelector((state) => state.product.past);
  const current = useSelector((state) => state.product.current);
  const cart = useSelector((state) => state.product.cart);
  const [count, setCount] = useState(cart);
  const [carts, setCarts] = useState({});
  const [formValues, setFormValues] = useState(past[current]);

  useEffect(() => {
    dispatch(cartFunc(count));
  }, [count]);

  const handleCart = (e, items) => {
    e.preventDefault();
    setCount((c) => c + 1);
    setFormValues({
      ...formValues,
      services: [...formValues.services, items],
      cart: count + 1,
    });
  };

  const handleCartAdd = (e) => {
    e.preventDefault();
    setCount((c) => c + 1);
    setFormValues({
      ...formValues,
      services: [...formValues.services, carts],
      cart: count + 1,
    });
  };
  const handleCartImg = (items) => {
    setCarts(items);
  };

  const goCart = (e) => {
    e.preventDefault();
    dispatch(userServiceFunc(formValues));
    dispatch(cartFunc(count));
  };

  const handleSearch = (e) => {
    const words = e.target.value;
    const results = services
      .filter((item) => item.serviceName.toLowerCase().includes(words))
      .map((item) => item);
    setSaved(results);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h4>
            <Navbar />
          </h4>
          <hr />
          <div className="row mb-2">
            <div className="col-3">
              <h3 className="m-1">Services</h3>
            </div>
            <div className="col-3 offset-1">
              <input
                className="form-control m-2 p-2"
                type="search"
                placeholder="Find Services"
                aria-label="Search"
                name="search"
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div className="col-3 offset-2">
              <button
                className="btn btn-secondary m-2 p-2"
                onClick={(e) => goCart(e)}
              >
                Cart
              </button>
            </div>
          </div>
          <div className="container text-center">
            <div className="row">
              {saved.length === 0 ? (
                <div>
                  <h4>No Services</h4>
                </div>
              ) : (
                saved.map((items, index) => {
                  return (
                    <div className="col" key={index}>
                      <div
                        className="card mt-3 p-3  border border-dark-subtle rounded"
                        style={{ width: "12rem" }}
                      >
                        <img
                          src={items.serviceImg}
                          className="card-img-top"
                          alt="product"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => handleCartImg(items)}
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
                            onClick={(e) => handleCart(e, items)}
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
                                    onClick={(e) => handleCartAdd(e)}
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
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
