import React, { useState, useEffect, FC } from "react";
import Presenter from "./presenter";
import TodoApi from "../../api/Todo/api";
import { todoType } from "../../api/Todo/type";
import { TopPageType } from "./type";

const TopPage: FC<TopPageType> = ({ user }) => {
  const [todos, setTodos] = useState([]);
  const [searchName, setSearchName] = useState("");

  const fetchTodo = async () => {
    const todoRes = await TodoApi.fetch();
    setTodos(todoRes.data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <Presenter
      todos={todos}
      user={user}
      searchName={searchName}
      setSearchName={setSearchName}
    />
  );
};

export default TopPage;
