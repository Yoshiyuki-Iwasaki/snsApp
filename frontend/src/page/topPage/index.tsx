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

  const removeAllTodos = async () => {
    const sure = window.confirm("本当に投稿を削除して問題ないでしょうか?");
    if (sure) {
      await TodoApi.remove_all();
      setTodos([]);
      notify("正常に投稿が削除されました。");
    }
  };

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
      removeAllTodos={removeAllTodos}
      updateIsCompleted={updateIsCompleted}
    />
  );
};

export default TopPage;
