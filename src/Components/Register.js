import React, { useState, useEffect } from "react";
import "../Styles/register.css";
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerFunc, currentFunc } from "../Redux/action";
import { registerFormValues, registerInputValues } from "../Database/input";
import { Input } from "../Comps/Input";

export const Register = () => {
  const stat = useSelector((state) => state.product.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ids = uuidv4();

  useEffect(() => {
    if (stat) navigate("/");
  });

  const [formValues, setFormValues] = useState(registerFormValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value, id: ids });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.regmail === "" && formValues.regpass === "") {
      alert("Invalid Input");
    } else {
      dispatch(registerFunc(formValues));
      dispatch(currentFunc(formValues.id));
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
