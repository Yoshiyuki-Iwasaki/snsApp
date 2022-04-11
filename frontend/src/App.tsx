import React, { FC } from "react";
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

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={"/"} element={<TodoList />} />
          <Route path={"/new"} element={<AddTodo />} />
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
