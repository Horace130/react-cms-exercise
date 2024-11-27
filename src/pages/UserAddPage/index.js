import { Link } from "react-router-dom";

function UserAdd() {
  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Add New User</h1>
      </div>
      <div className="card mb-2 p-4">
        <form>
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="col">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="col">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirm-password"
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select className="form-control" id="role">
              <option value="">Select an option</option>
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/manage-users" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Users
        </Link>
      </div>
    </div>
  );
}

export default UserAdd;
