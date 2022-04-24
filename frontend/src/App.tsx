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
import UserPage from "./page/userPage";
import Cookies from "js-cookie";

const App: FC = () => {
  const uid = Cookies.get("_uid");
  const access_token = Cookies.get("_access_token");
  const client = Cookies.get(" _client");
  console.log(uid);
  console.log(access_token);
  console.log(client);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={"/"} element={<TodoList />} />
          <Route path={"/new"} element={<AddTodo />} />
          <Route path={"/user/:id"} element={<UserPage />} />
          <Route path={"/:id"} element={<DetailPage />} />
          <Route path={"/:id/edit"} element={<EditTodo />} />
          <Route path={"/signup"} element={<SignUpPage />} />
          <Route path={"/signin"} element={<SignInPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
