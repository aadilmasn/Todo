import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { delServiceFunc } from "../Redux/action";
import { serviceInputValues, serviceFormValues } from "../Database/input";
import { Modals } from "../Admin/Modals";

export const ServiceTable = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.product.services);
  const [service] = useState(serviceFormValues);
  const [deleted, setDelete] = useState(services);

  const handleEdit = (e, item) => {
    e.preventDefault();
    console.log(item);
  };
  const handleDelete = (e, item) => {
    e.preventDefault();
    const newproducts = deleted.filter((items) => items.id !== item.id);
    setDelete(newproducts);
    dispatch(delServiceFunc(newproducts));
  };

  return (
    <div>
      <Modals
        list={service}
        inputt={serviceInputValues}
        names="Service"
        match="#Service"
      />
      <table className="table table-striped table-info">
        <thead>
          <tr>
            <th scope="col">Service ID</th>
            <th scope="col">Service Name</th>
            <th scope="col">Service Price</th>
            <th scope="col">Service Description</th>
            <th scope="col">Service Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.serviceName}</td>
                <td>{item.servicePrice}</td>
                <td>{item.serviceDesc}</td>
                <td>{item.serviceImg}</td>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
