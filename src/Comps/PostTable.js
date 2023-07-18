import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { delPostFunc } from "../Redux/action";
import { postInputValues, postFormValues } from "../Database/input";
import { Modals } from "./Modals";

export const PostTable = () => {
  const dispatch = useDispatch();
  const ids = uuidv4();
  const posts = useSelector((state) => state.product.posts);
  const [saved, setSaved] = useState(posts);

  const handleEdit = (e, item) => {
    e.preventDefault();
    console.log(item);
  };
  const handleSearch = (e) => {
    const words = e.target.value;
    const results = posts
      .filter((item) => item.postName.toLowerCase().includes(words))
      .map((item) => item);
    setSaved(results);
  };
  const handleDelete = (e, item) => {
    e.preventDefault();
    dispatch(delPostFunc(item.id));
  };

  return (
    <div className="card p-3 border border-dark-subtle mb-5">
    <div className="row mb-2">
      <div className="col-4">
      <Modals
          list={postFormValues}
          inputt={postInputValues}
          names="Post"
          match="#Post"
          ids={ids}
        />
      </div>
      <div className="col-4 offset-4">
      <input
            className="form-control me-2 my-2"
            type="search"
            placeholder="Find Post"
            aria-label="Search"
            name="search"
            onChange={(e) => handleSearch(e)}
          />
      </div>
    </div>
    <div className="row mb-2">
      <div className="col">
      <div className="table-responsive">
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
                  <td>{item.postName}</td>
                  <td>{item.postDesc}</td>
                  <td>{item.postImg}</td>
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
