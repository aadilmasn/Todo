import React from "react";
import "../Styles/blog.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";
import { useDispatch, useSelector } from "react-redux";

export const Blog = () => {
  const blogs = useSelector((state) => state.product.posts);
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h4>
            <Navbar />
          </h4>
          <hr />
          <h3 className="ms-3">Blog</h3>
          <div className="container ms-0">
            <div className="row">
              {blogs.map((items, index) => {
                return (
                  <div
                    className="card mb-3 me-2 mx-auto"
                    style={{ maxWidth: "500px" }}
                    key={index}
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={items.postImg}
                          className="img-fluid rounded mt-3"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title text-start">
                            {items.postName}
                          </h5>
                          <p className="card-text text-start">
                            {items.postDesc}
                          </p>
                          <p className="card-text text-start">
                            <small className="text-body-secondary">
                              Last updated 3 mins ago
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
