import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/DashboardPage";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import PostAdd from "./pages/PostAddPage";
import PostEdit from "./pages/PostEditPage";
import PostManage from "./pages/PostManagePage";
import Signup from "./pages/SignupPage";
import SinglePost from "./pages/SinglePostPage";
import UserAdd from "./pages/UserAddPage";
import UserChangePassword from "./pages/UserChangePasswordPage";
import UserEdit from "./pages/UserEditPage";
import UserManage from "./pages/UserManagePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/manage-posts" element={<PostManage />} />
          <Route path="/manage-posts/add" element={<PostAdd />} />
          <Route
            path="/manage-posts/edit/:post_id"
            element={<PostEdit />}
          />
          <Route path="/manage-users" element={<UserManage />} />
          <Route path="/manage-users/add" element={<UserAdd />} />
          <Route path="/manage-users/edit" element={<UserEdit />} />
          <Route
            path="/manage-users/change-password"
            element={<UserChangePassword />}
          />
          <Route path="/post" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
