import React, { useState, FC } from "react";
import "ress";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from "./page/addPage";
import TodoList from "./page/topPage";
import EditTodo from "./page/editPage";
import Layout from "./components/templates/layout";
import DetailPage from "./page/detailPage";
import SignUpPage from "./page/signUpPage";
import SignInPage from "./page/signInPage";
import UserApi from "./api/User/api";

const App: FC = () => {
  const [user, setUser] = useState<any>();

  const fetchUser = async () => {
    const userId = localStorage.getItem("userId");
    const userRes = await UserApi.show(userId);
    setUser(userRes.data);
  };
  return (
    <Router>
      <Layout user={user} setUser={setUser} fetchUser={fetchUser}>
        <Routes>
          <Route path={"/"} element={<TodoList />} />
          <Route path={"/new"} element={<AddTodo user={user} />} />
          <Route path={"/:id"} element={<DetailPage />} />
          <Route path={"/:id/edit"} element={<EditTodo />} />
          <Route path={"/signup"} element={<SignUpPage />} />
          <Route
            path={"/signin"}
            element={<SignInPage fetchUser={fetchUser} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
