import React, { useState } from "react";
import "../Styles/blog.css";
import { Sidebar } from "../Comps/Sidebar";
import { Navbar } from "../Comps/Navbar";
import { useSelector } from "react-redux";

export const Blog = () => {
  const blogs = useSelector((state) => state.product.posts);
  const [saved, setSaved] = useState(blogs);

  const handleSearch = (e) => {
    const words = e.target.value;
    const results = blogs
      .filter((item) => item.postName.toLowerCase().includes(words))
      .map((item) => item);
    setSaved(results);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <h4>
            <Navbar />
          </h4>
          <div className="row mb-2">
            <div className="col-4">
              <h3 className="m-1">Blog</h3>
            </div>
            <div className="col-3 offset-4">
              <input
                className="form-control m-2 p-2"
                type="search"
                placeholder="Find Posts"
                aria-label="Search"
                name="search"
                onChange={(e) => handleSearch(e)}
              />
            </div>
          </div>

          <div className="container text-center">
            <div className="row">
              {
                saved.length === 0 ? <div><h4>No Posts</h4></div> : (
                  saved.map((items, index) => {
                    return (
                      <div
                        className="card mb-3 me-3 mx-auto"
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
                  })
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
