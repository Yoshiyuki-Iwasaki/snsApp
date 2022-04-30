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
import UserPage from "./page/userPage";
import useFetchMyUser from "./hooks/useFetchMyUser";

const App: FC = () => {
  const { myUser } = useFetchMyUser();
  return (
    <Router>
      <Layout>
        <Routes>
          {myUser && myUser.isLogin ? (
            <>
              <Route path={"/"} element={<TodoList />} />
              <Route path={"/new"} element={<AddTodo />} />
              <Route path={"/user/:id"} element={<UserPage />} />
              <Route path={"/todo/:id"} element={<DetailPage />} />
              <Route path={"/:id/edit"} element={<EditTodo />} />
            </>
          ) : (
            <>
              <Route path={"/"} element={<SignInPage />} />
              <Route path={"/signup"} element={<SignUpPage />} />
            </>
          )}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
