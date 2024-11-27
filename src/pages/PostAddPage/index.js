import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Button from "../../components/button";
import { nanoid } from "nanoid";

function PostAdd() {
  /*
    1. [x] set state for all the input fields
    2. [x] add onClick event handling to the add button
    3. [ ] save the data into local storage
  */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // get the existing posts from the local storage
    const stringPosts = localStorage.getItem("posts");
    let posts = JSON.parse(stringPosts);

    // if posts is not found, set it as empty array
    if (!posts) {
      posts = [];
    }

    // push new item into the posts array
    posts.push({
      id: nanoid(),
      title: title,
      content: content,
      status: "pending",
    });

    // convert the posts array into string format (JSON string)
    let convertedPosts = JSON.stringify(posts);

    // save the updated posts into local storage
    localStorage.setItem("posts", convertedPosts);

    navigate("/manage-posts");
  };

  return (
    <div className="container mx-auto my-5" style={{ maxwidth: 700 }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Add New Post</h1>
      </div>
      <div className="card mb-2 p-4">
        <form>
          <div className="mb-3">
            <label htmlFor="post-title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="post-title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="post-content" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="post-content"
              rows="10"
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="text-end">
            <Button color="primary" onClick={handleFormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/manage-posts" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Posts
        </Link>
      </div>
    </div>
  );
}
export default PostAdd;
