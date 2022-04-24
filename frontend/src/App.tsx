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
  const [myUser, setMyUser] = useState<any>();

  const fetchUser = async () => {
    const userRes = await UserApi.fetch_loginUser();
    setMyUser(userRes);
    console.log("userRes", userRes);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Router>
      <Layout myUser={myUser} setUser={setMyUser} fetchUser={fetchUser}>
        <Routes>
          <Route path={"/"} element={<TodoList myuser={myUser} />} />
          <Route path={"/new"} element={<AddTodo myuser={myUser} />} />
          <Route path={"/user/:id"} element={<UserPage myUser={myUser} />} />
          <Route path={"/:id"} element={<DetailPage myuser={myUser} />} />
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
