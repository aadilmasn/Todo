import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { delProductFunc } from "../Redux/action";
import { productInputValues, productFormValues } from "../Database/input";
import { Modals } from "../Admin/Modals";
import { MiniModal } from "../Admin/MinModal";

export const ProductTable = () => {
  const dispatch = useDispatch();
  const [product] = useState(productFormValues);
  const products = useSelector((state) => state.product.products);
  const [deleted, setDelete] = useState(products);

  const handleDelete = (e, item) => {
    e.preventDefault();
    const newproducts = deleted.filter((items) => items.id !== item.id);
    setDelete(newproducts);
    dispatch(delProductFunc(newproducts));
  };



  return (
    <div>
      <Modals
        list={product}
        inputt={productInputValues}
        names="Product"
        match="#Product"
      />
      <table className="table table-striped table-success">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.productName}</td>
                <td>{item.productPrice}</td>
                <td>{item.productDesc}</td>
                <td>{item.productImg}</td>
                <td>
                  <MiniModal
                    list={item}
                    inputs={productInputValues}
                  />
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
