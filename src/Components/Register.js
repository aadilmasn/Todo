import React, { useState, useEffect } from "react";
import "../Styles/register.css";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerFunc, currentFunc, pastUserFunc, cartFunc } from "../Redux/action";
import { registerFormValues, registerInputValues } from "../Database/input";
import { Input } from "../Comps/Input";

export const Register = () => {
  const id = uuidv4();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.product.status);
  const past = useSelector((state) => state.product.past);
  const config = useSelector((state) => state.product.past.config);

  const [formValues, setFormValues] = useState(registerFormValues);

  useEffect(() => {
    if (status) navigate("/");
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value, id: id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.regmail === "" && formValues.regpass === "") {
      alert("Invalid Input");
    } else {
      dispatch(registerFunc(formValues));
      dispatch(pastUserFunc({ [formValues.id]: formValues }));
      dispatch(currentFunc(formValues.id));
      dispatch(cartFunc(0));
    }
  };

  return (
    <div
      className="card text-center mx-auto p-3"
      style={{ width: "40%", marginTop: "10%" }}
    >
      <div className="card-header">Register</div>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          {registerInputValues.map((item) => {
            return (
              <Input
                key={item.name}
                onChange={(e) => handleChange(e)}
                value={formValues[item.name]}
                {...item}
              />
            );
          })}
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
      <div className="card-footer text-body-secondary">
        <p className="text-start">
          Existing User{" "}
          <Link to="/auth" className="link-underline-light">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
