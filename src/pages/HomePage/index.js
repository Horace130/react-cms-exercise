import { Link } from "react-router-dom";
import PostCard from "../../components/card_post";

function Home() {
  return (
    <div className="container mx-auto my-5" style={{ maxwidth: 500 }}>
      <h1 className="h1 mb-4 text-center">My Blog</h1>
      <PostCard
        title="Post 4"
        desc="Here's some content about post 4"
        buttonColor="primary"
        buttonLabel="Read More"
      />
      <PostCard
        title="Post 3"
        desc="Here's some content about post 3"
        buttonColor="primary"
        buttonLabel="Read More"
      />
      <PostCard
        title="Post 2"
        desc="Here's some content about post 2"
        buttonColor="primary"
        buttonLabel="Read More"
      />
      <PostCard
        title="Post 1"
        desc="Here's some content about post 1"
        buttonColor="primary"
        buttonLabel="Read More"
      />

      <div className="mt-4 d-flex justify-content-center gap-3">
        <Link to="/login" className="btn btn-link btn-sm">
          Login
        </Link>
        <Link to="/signup" className="btn btn-link btn-sm">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
export default Home;
