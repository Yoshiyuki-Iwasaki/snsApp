import React, { FC } from "react";
import "ress";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodo";
import Layout from "./components/layout";

const App: FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={"/todos"} element={<TodoList />} />
          <Route path={"/todos/new"} element={<AddTodo />} />
          <Route path={"/todos/:id/edit"} element={<EditTodo />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
