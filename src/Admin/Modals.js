import React, { useState, useId } from "react";
import { Input } from "../Comps/Input";
import { addPostFunc, addProductFunc, addServiceFunc } from "../Redux/action";
import { useDispatch } from "react-redux";

export const Modals = (props) => {
  const { inputt, list, names, match } = props;
  const ids = useId();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(list);

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value, id : ids });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (names === "Product") {
      dispatch(addProductFunc(formValues));
    } else if (names === "Post") {
      dispatch(addPostFunc(formValues));
    } else if (names === "Service") {
      dispatch(addServiceFunc(formValues));
    }
    setFormValues(list);
  };

  return (
    <>
      {/* Start Add  */}
      <button
        type="button"
        className="btn btn-outline-primary m-3"
        data-bs-toggle="modal"
        data-bs-target={match}
      >
        Add {names}
      </button>
      <div
        className="modal fade"
        id={names}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={names}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={names}>
                Add {names}
              </h1>
            </div>
            <div className="modal-body">
              {inputt.map((item) => {
                return (
                  <Input
                    key={item.name}
                    onChange={(e) => handleChange(e)}
                    value={formValues[item.name]}
                    {...item}
                  />
                );
              })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={(e) => handleSubmit(e)}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add {names}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add Product */}
    </>
  );
};
