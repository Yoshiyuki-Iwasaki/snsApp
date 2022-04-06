import React, { FC } from "react";
import "ress";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from "./page/addPage";
import TodoList from "./page/topPage";
import EditTodo from "./page/editPage";
import Layout from "./components/templates/layout";

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={"/"} element={<TodoList />} />
          <Route path={"/new"} element={<AddTodo />} />
          <Route path={"/:id/edit"} element={<EditTodo />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
