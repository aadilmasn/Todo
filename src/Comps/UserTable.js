import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { delProductFunc, delUserFunc } from "../Redux/action";
import {
  productInputValues,
  productFormValues,
  registerInputValues,
  registerFormValues,
} from "../Database/input";
import { Modals } from "./Modals";

export const UserTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.product.users);
  const ids = uuidv4();
  const [saved, setSaved] = useState(users);

  const handleDelete = (e, item) => {
    e.preventDefault();
    dispatch(delUserFunc(item.id));
  };
  const handleSearch = (e) => {
    const words = e.target.value;
    const results = users
      .filter((item) => item.regname.toLowerCase().includes(words) || item.regmail.toLowerCase().includes(words) || item.regmobile.toLowerCase().includes(words))
      .map((item) => item);
    setSaved(results);
  };

  return (
    <div className="card p-3 border border-dark-subtle mb-5">
      <div className="row mb-2">
        <div className="col-4">
          <Modals
            list={registerFormValues}
            inputt={registerInputValues}
            names="User"
            match="#User"
            ids={ids}
          />
        </div>
        <div className="col-4 offset-4">
          <input
            className="form-control me-2 my-2"
            type="search"
            placeholder="Find User"
            aria-label="Search"
            name="search"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-striped table-success">
              <thead>
                <tr>
                  <th scope="col">Edit Delete</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Mobile</th>
                  <th scope="col">User Mail</th>
                  <th scope="col">User Password</th>
                  <th scope="col">User Image</th>
                  <th scope="col">User ID</th>
                </tr>
              </thead>
              <tbody>
                {saved.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <button className="btn btn-outline-primary m-1">
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                          className="btn btn-outline-danger m-1"
                          type="button"
                          onClick={(e) => handleDelete(e, item)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                      <td>{item.regname}</td>
                      <td>{item.regmobile}</td>
                      <td>{item.regmail}</td>
                      <td>{item.regpass}</td>
                      <td>Images</td>
                      <th>{item.id}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
