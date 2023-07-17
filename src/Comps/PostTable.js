import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { delPostFunc } from "../Redux/action";
import { postInputValues, postFormValues } from "../Database/input";
import { Modals } from "../Admin/Modals";

export const PostTable = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.product.posts);
  const [post] = useState(postFormValues);
  const [deleted, setDelete] = useState(posts);

  const handleEdit = (e, item) => {
    e.preventDefault();
    console.log(item);
  };
  const handleDelete = (e, item) => {
    e.preventDefault();
    const newproducts = deleted.filter((items) => items.id !== item.id);
    setDelete(newproducts);
    dispatch(delPostFunc(newproducts));
  };

  return (
    <div>
      <Modals list={post} inputt={postInputValues} names="Post" match="#Post" />
      <table className="table table-striped table-secondary">
        <thead>
          <tr>
            <th scope="col">Post ID</th>
            <th scope="col">Post Name</th>
            <th scope="col">Post Description</th>
            <th scope="col">Post Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.postName}</td>
                <td>{item.postDesc}</td>
                <td>{item.postImg}</td>
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
