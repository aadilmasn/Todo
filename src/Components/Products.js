import React, { useEffect, useState } from "react";
import "../Styles/products.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { cartFunc, userProductFunc } from "../Redux/action";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const past = useSelector((state) => state.product.past);
  const current = useSelector((state) => state.product.current);
  const cart = useSelector((state) => state.product.cart);
  const [saved, setSaved] = useState(products);
  const [count, setCount] = useState(cart);
  const [carts, setCarts] = useState({});
  const [button, setButton] = useState(false);
  const [formValues, setFormValues] = useState(past[current]);

  useEffect(() => {
    dispatch(cartFunc(count));
    
  }, [count]);

  const handleCart = (e, items) => {
    e.preventDefault();
    setCount((c) => c + 1);
    setButton(true);
    setFormValues({
      ...formValues,
      products: [...formValues.products, items],
      cart: count + 1,
    });
  };

  const handleSearch = (e) => {
    const words = e.target.value;
    const results = products
      .filter((item) => item.productName.toLowerCase().includes(words))
      .map((item) => item);
    setSaved(results);
  };

  const handleCartAdd = (e) => {
    e.preventDefault();
    setButton(true);
    setCount((c) => c + 1);
    setFormValues({
      ...formValues,
      products: [...formValues.products, carts],
      cart: count + 1,
    });
  };

  const handleCartImg = (items) => {
    setCarts(items);
  };

  const goCart = (e) => {
    e.preventDefault();
    dispatch(userProductFunc(formValues));
    dispatch(cartFunc(count));
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
              <h3 className="m-1">Products</h3>
            </div>
            <div className="col-3 offset-1">
              <input
                className="form-control m-2 p-2"
                type="search"
                placeholder="Find Products"
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
                  <h4>No Products</h4>
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
                          src={items.productImg}
                          className="card-img-top"
                          alt="product"
                          data-bs-toggle="modal"
                          data-bs-target="#cart"
                          onClick={() => handleCartImg(items)}
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
                            onClick={(e) => handleCart(e, items)}
                          >
                            Add to Cart
                          </button>
                          {/* Modal Start  */}
                          <div
                            className="modal fade"
                            id="cart"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabIndex="-1"
                            aria-labelledby="cart"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h1 className="modal-title fs-5" id="cart">
                                    {carts.productName}
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
                                    src={carts.productImg}
                                    className="card-img-top"
                                    alt="product"
                                  />

                                  <p className="card-text ms-4 mb-2 text-start">
                                    {carts.productDesc}
                                  </p>
                                </div>
                                <div className="modal-footer">
                                  <h6>Price</h6>{" "}
                                  <button
                                    type="button"
                                    className="btn btn-outline-dark disabled"
                                  >
                                    Rs. {carts.productPrice}
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
