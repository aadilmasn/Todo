import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { delProductFunc } from "../Redux/action";
import { productInputValues, productFormValues } from "../Database/input";
import { Modals } from "./Modals";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const ids = uuidv4();
  const products = useSelector((state) => state.product.products);
  const [saved, setSaved] = useState(products);

  const handleDelete = (e, item) => {
    e.preventDefault();
    dispatch(delProductFunc(item.id));
  };
  const handleSearch = (e) => {
    const words = e.target.value;
    const results = products
      .filter((item) => item.productName.toLowerCase().includes(words))
      .map((item) => item);
    setSaved(results);
  };

  return (
    <div className="card p-3 border border-dark-subtle mb-5">
      <div className="row mb-2">
        <div className="col-4">
          <Modals
            list={productFormValues}
            inputt={productInputValues}
            names="Product"
            match="#Product"
            ids={ids}
          />
        </div>
        <div className="col-4 offset-4">
          <input
            className="form-control me-2 my-2"
            type="search"
            placeholder="Find Product"
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
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Product Description</th>
                  <th scope="col">Product Image</th>
                  <th scope="col">Product ID</th>
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
                      <td>{item.productName}</td>
                      <td>{item.productPrice}</td>
                      <td>{item.productDesc}</td>
                      <td>{item.productImg}</td>
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
