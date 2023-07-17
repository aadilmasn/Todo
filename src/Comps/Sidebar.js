import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutFunc } from "../Redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHouse,
  faCartShopping,
  faMessage,
  faBlog,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.login.users);
  const stat = useSelector((state) => state.login.status);

  useEffect(() => {
    if (!stat) navigate("/auth");
  });

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutFunc());
    navigate("/auth");
  };
  return (
    <div className="col-sm-auto bg-light sticky-top">
      <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
          <li>
            <Link
              to="/"
              className="nav-link link-secondary py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Icon-only"
            >
              <i className="fs-4">
                <FontAwesomeIcon icon={faHouse} />
              </i>
              <h6>Home</h6>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-link link-secondary py-3 px-2"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
            >
              <i className="fs-4">
                <FontAwesomeIcon icon={faCartShopping} />
              </i>
              <h6>Products</h6>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="nav-link link-secondary py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <i className="fs-4">
                <FontAwesomeIcon icon={faScrewdriverWrench} />
              </i>
              <h6>Services</h6>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="nav-link link-secondary py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Orders"
            >
              <i className="fs-4">
                <FontAwesomeIcon icon={faBlog} />
              </i>
              <h6>Blog</h6>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link link-secondary py-3 px-2"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Customers"
            >
              <i className="fs-4">
                <FontAwesomeIcon icon={faMessage} />
              </i>
              <h6>Contact Us</h6>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="nav-link link-secondary py-3 px-2"
              id="drop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fs-4">
                <FontAwesomeIcon icon={faGear} />
              </i>
              <h6>Profile</h6>
            </Link>
            <ul
              className="dropdown-menu text-small text-center shadow"
              aria-labelledby="drop"
            >
              <li>
                <Link to="/config" className="dropdown-item">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/admin" className="dropdown-item">
                  Admin
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  onClick={(e) => handleLogout(e)}
                >
                  Logout
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
