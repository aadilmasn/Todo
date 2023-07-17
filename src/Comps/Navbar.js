import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFunc } from "../Redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.login.current);
  const count = useSelector((state) => state.login.cart);
  const stat = useSelector((state) => state.login.status);
  const name = user.substring(0, user.lastIndexOf("@"));
  const names = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    if (!stat) navigate("/auth");
  });
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutFunc());
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h2>Masn</h2>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success me-2">
              <FontAwesomeIcon icon={faUser} />
            </button>
            <button className="btn btn-outline-success disabled me-2">
              {names}
            </button>
            <button className="btn btn-outline-primary me-2 position-relative">
              <FontAwesomeIcon icon={faCartShopping} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {count}
              </span>
            </button>

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
