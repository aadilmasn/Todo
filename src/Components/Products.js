import React, { useState } from "react";
import "../Styles/products.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";
import { useDispatch, useSelector } from "react-redux";

export const Products = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [carts, setCarts] = useState({
    id: "",
    name: "",
    price: "",
    desc: "",
    img: "",
  });

  const handleCart = (e, index, items) => {
    e.preventDefault();
    console.log(e, index, items);
  };
  const handleCartImg = (e, index, items) => {
    e.preventDefault();
    setCarts({
      ...carts,
      id: items.id,
      name: items.productName,
      price: items.productPrice,
      desc: items.productDesc,
      img: items.productImg,
    });
    console.log(e, index, items, carts);
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
          <h3 className="ms-3">Products</h3>
          <div className="container text-center">
            <div className="row">
              {products.map((items, index) => {
                return (
                  <div className="col" key={index}>
                    <div
                      className="cDetailsclaard mt-3 p-3  border border-dark-subtle rounded"
                      style={{ width: "12rem" }}
                    >
                      <img
                        src={items.productImg}
                        className="card-img-top"
                        alt="product"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={(e) => handleCartImg(e, index, items)}
                      />
                      <div className="card-body">
                        <h6 className="card-title mt-1 text-start">
                          {items.productName}
                        </h6>
                        <h6 className="card-text mt-1 text-start">
                          Rs. {items.productPrice}
                        </h6>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={(e) => handleCartImg(e, index, items)}
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
                                  {carts.name}
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
                                  src={carts.img}
                                  className="card-img-top"
                                  alt="product"
                                />

                                <p className="card-text ms-4 mb-2 text-start">
                                  {carts.desc}
                                </p>
                              </div>
                              <div className="modal-footer">
                              <h6>Price</h6> <button
                                  type="button"
                                  className="btn btn-outline-dark disabled"
                                >
                                Rs. {carts.price}
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-info"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-primary"
                                  onClick={(e) => handleCart(e, items)}
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
