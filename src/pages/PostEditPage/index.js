import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function ManagePostsEdit() {
  const navigate = useNavigate();
  /*
    1. [ ] set state for all the input fields
    2. [ ] add onClick event handling to the update button
    3. [x] save the data into local storage
  */
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("pending");
  return (
    <div>
      <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h1 className="h1">Edit Post</h1>
        </div>
        <div className="card mb-2 p-4">
          <form>
            <div className="mb-3">
              <label for="post-title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="post-title"
                value={title}
                onChange={(event) => {
                  // update the taskName state
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label for="post-content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="post-content"
                rows="10"
                value={content}
                onChange={(event) => {
                  // update the taskName state
                  setContent(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="mb-3">
              <label for="post-content" className="form-label">
                Status
              </label>
              <select
                className="form-control"
                id="post-status"
                name="status"
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
                value={status}
              >
                <option value="review">Pending for Review</option>
                <option value="publish">Publish</option>
              </select>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-primary">
          <Link to="/manage-posts" className="btn btn-link btn-sm">
            <i className="bi bi-arrow-left"></i> Back to Posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ManagePostsEdit;
