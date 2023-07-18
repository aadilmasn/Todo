import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const navigate = useNavigate();
  const status = useSelector((state) => state.product.status);
  const ids = useSelector((state) => state.product.current);
  const datas = useSelector((state) => state.product.users);
  const name = datas
    .filter((item) => item.id === ids)
    .map((item) => item.regname);
  const cart = datas.filter((item) => item.id === ids).map((item) => item.cart);

  useEffect(() => {
    if (!status) navigate("/auth");
  });

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <Link to="/" className="navbar-brand">
        <h2 className="p-1">Masn</h2>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-success me-2">
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button className="btn btn-outline-success disabled me-2">
            {name}
          </button>
          <button className="btn btn-outline-primary me-2 position-relative">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {cart}
            </span>
          </button>
        </form>
      </div>
    </nav>
  );
};
