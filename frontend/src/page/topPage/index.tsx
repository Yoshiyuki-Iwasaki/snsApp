import React, { useState, useEffect, FC } from "react";
import Presenter from "./presenter";
import TodoApi from "../../api/Todo/api";
import { todoType } from "../../api/Todo/type";
import { notify } from "../../util/notify";

const TopPage: FC<any> = ({ user }) => {
  const [todos, setTodos] = useState([]);
  const [searchName, setSearchName] = useState("");

  const fetchTodo = async () => {
    const todoRes = await TodoApi.fetch();
    setTodos(todoRes.data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const updateIsCompleted = async (index, val: todoType) => {
    const data: todoType = {
      id: val.id,
      name: val.name,
      completed: val.completed ? false : true,
    };
    try {
      const todoRes = await TodoApi.update(val.id, data);
      const newTodos: todoType[] = [...todos];
      newTodos[index].completed = todoRes.data.completed;
      setTodos(newTodos);
      notify("正常に投稿が完了しました。");
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <Presenter
      todos={todos}
      user={user}
      searchName={searchName}
      setSearchName={setSearchName}
      updateIsCompleted={updateIsCompleted}
    />
  );
};

export default TopPage;
