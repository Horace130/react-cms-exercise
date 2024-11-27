import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Badge from "../../components/badge";

function PostManage() {
  const navigate = useNavigate();

  /*
    1. [x] load the data from the local storage
  */
  const stringPosts = localStorage.getItem("posts");
  // convert the string version of posts into array
  let posts = JSON.parse(stringPosts);

  // if posts is not found in the localstorage, set empty array
  if (!posts) {
    posts = [];
  }

  const handlePostDelete = (post_id) => {
    // 1. remove the selected post from posts based on the post_id
    let filteredPosts = posts.filter((post) => post.id !== post_id);
    // 2. update the data back to the local storage using thelocalStorage.setItem()
    let convertedPosts = JSON.stringify(filteredPosts);

    localStorage.setItem("posts", convertedPosts);
    // 3. redirect back to /manage-posts
    navigate("/manage-posts");
  };

  return (
    <div className="container mx-auto my-5" style={{ maxwidth: 700 }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Manage Posts</h1>
        <div className="text-end">
          <Link to="/manage-posts/add" className="btn btn-primary btn-sm">
            Add New Post
          </Link>
        </div>
      </div>
      <div className="card mb-2 p-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col" style={{ width: "40%" }}>
                Title
              </th>
              <th scope="col">Status</th>
              <th scope="col" className="text-end">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* [x] .map to populate the posts */}
            {posts.map((post) => (
              <tr>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>
                  {post.status === "publish" ? (
                    <Badge color="green">{post.status}</Badge>
                  ) : (
                    <Badge color="yellow">{post.status}</Badge>
                  )}
                </td>
                <td className="text-end">
                  <div className="buttons d-flex justify-content-end gap-2">
                    <a
                      href="/post"
                      target="_blank"
                      className="btn btn-primary btn-sm disabled"
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                    <Button
                      color="grey"
                      size="small"
                      onClick={() => {
                        navigate("/manage-posts/edit/" + post.id);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </Button>
                    <Button
                      color="red"
                      size="small"
                      onClick={() => {
                        // do a user confirmation using confirm()
                        // trigger handlePostDelete function by passing in the post id
                        const confirm = window.confirm(
                          "Are you sure you want to delete this post?"
                        );
                        if (confirm) {
                          handlePostDelete(post.id);
                        }
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <Link to="/dashboard" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
export default PostManage;
