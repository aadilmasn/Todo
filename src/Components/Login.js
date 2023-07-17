import React, { useEffect, useState } from "react";
import "../Styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFunc, currentFunc } from "../Redux/action";
import { loginFormValues, loginInputValues } from "../Database/input";
import { Input } from "../Comps/Input";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.login.users);
  const stat = useSelector((state) => state.login.status);
  const [formValues, setFormValues] = useState(loginFormValues);

  useEffect(() => {
    if (stat) navigate("/");
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.map((item) => {
      if (
        item.regmail === formValues.logmail &&
        item.regpass === formValues.logpass
      ) {
        dispatch(loginFunc());
        dispatch(currentFunc(formValues.logmail));
        navigate("/");
      }
    });
    
    // if (formValues.logmail === "" && formValues.logpass === "") {
    //   alert("Invalid Input");
    // } else {
    //   users
    //     .filter(
    //       (item) =>
    //         item.regmail.includes(formValues.logmail) &&
    //         item.regpass.includes(formValues.logpass)
    //     )
    //     .map((items) => {
    //       dispatch(loginFunc());
    //       navigate("/");
    //     });
    // }
  };

  return (
    <div
      className="card text-center mx-auto p-3"
      style={{ width: "40%", marginTop: "10%" }}
    >
      <div className="card-header">Login</div>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
        {loginInputValues.map((item) => {
            return (
              <Input
                key = {item.name}
                onChange={(e) => handleChange(e)}
                value={formValues[item.name]}
                {...item}
              />
            );
          })}
          <button type="submit" className="btn btn-primary mt-1">
            Login
          </button>
        </form>
      </div>
      <div className="card-footer text-body-secondary text-start">
        New User{" "}
        <Link to="/register" className="link-underline-light">
          Register
        </Link>
      </div>
    </div>
  );
};
