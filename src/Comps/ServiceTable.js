import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { delServiceFunc } from "../Redux/action";
import { serviceInputValues, serviceFormValues } from "../Database/input";
import { Modals } from "./Modals";

export const ServiceTable = () => {
  const dispatch = useDispatch();
  const ids = uuidv4();
  const services = useSelector((state) => state.product.services);
  const [saved, setSaved] = useState(services);

  const handleEdit = (e, item) => {
    e.preventDefault();
    console.log(item);
  };
  const handleSearch = (e) => {
    const words = e.target.value;
    const results = services
      .filter((item) => item.serviceName.toLowerCase().includes(words))
      .map((item) => item);
    setSaved(results);
  };
  const handleDelete = (e, item) => {
    e.preventDefault();
    dispatch(delServiceFunc(item.id));
  };

  return (
    <div className="card p-3 border border-dark-subtle mb-5">
      <div className="row mb-2">
        <div className="col-4">
          <Modals
            list={serviceFormValues}
            inputt={serviceInputValues}
            names="Service"
            match="#Service"
            ids={ids}
          />
        </div>
        <div className="col-4 offset-4">
          <input
            className="form-control me-2 my-2"
            type="search"
            placeholder="Find Service"
            aria-label="Search"
            name="search"
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-striped table-info">
              <thead>
                <tr>
                  <th scope="col">Edit Delete</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">Service Price</th>
                  <th scope="col">Service Description</th>
                  <th scope="col">Service Image</th>
                  <th scope="col">Service ID</th>
                </tr>
              </thead>
              <tbody>
                {saved.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <button
                          className="btn btn-outline-dark m-1"
                          type="button"
                          onClick={(e) => handleEdit(e, item)}
                        >
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
                      <td>{item.serviceName}</td>
                      <td>{item.servicePrice}</td>
                      <td>{item.serviceDesc}</td>
                      <td>{item.serviceImg}</td>
                      <td>{item.id}</td>
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
