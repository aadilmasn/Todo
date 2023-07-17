import React, { useState } from "react";
import { Input } from "../Comps/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { addPostFunc, addProductFunc, addServiceFunc } from "../Redux/action";
import { useDispatch } from "react-redux";

export const MiniModal = (props) => {
  const { inputs, list } = props;
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(list);

  const handleChange = (e) => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value, id: list.id });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(list.id);
    setFormValues(list);
  };

  return (
    <>
      {/* Start Add  */}
      <button
        className="btn btn-outline-dark m-1"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#update"
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>
      <div
        className="modal fade"
        id="update"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="update"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="update">
                Edit Details
              </h1>
            </div>
            <div className="modal-body">
              {inputs.map((item) => {
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
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Add Product */}
    </>
  );
};
