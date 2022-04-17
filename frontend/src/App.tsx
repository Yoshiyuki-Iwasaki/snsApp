import React, { useState, useEffect, FC } from "react";
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
import UserPage from "./page/userPage";

const App: FC = () => {
  const [myuser, setMyuser] = useState<any>();

  const fetchUser = async () => {
    const userId = localStorage.getItem("userId");
    const userRes = await UserApi.show(userId);
    setMyuser(userRes.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Router>
      <Layout user={myuser} setUser={setMyuser}>
        <Routes>
          <Route path={"/"} element={<TodoList user={myuser} />} />
          <Route path={"/new"} element={<AddTodo user={myuser} />} />
          <Route path={"/user/:id"} element={<UserPage myUser={myuser} />} />
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
