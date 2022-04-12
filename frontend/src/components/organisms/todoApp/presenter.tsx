import React, { useState, useEffect, FC } from "react";
import { List } from "./style";
import ListItem from "../../molecules/listItem";
import SearchArea from "../../molecules/searchArea";
import TodoApi from "../../../api/Todo/api";
import { todoType } from "../../../api/Todo/type";
import { notify } from "../../../util/notify";

const Presenter: FC = () => {
  const [todos, setTodos] = useState([]);
  const [searchName, setSearchName] = useState("");

  const fetchTodo = async () => {
    const todoRes = await TodoApi.fetch();
    setTodos(
      todoRes.data.sort((a, b) => {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      })
    );
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
    <>
      <SearchArea
        setSearchName={setSearchName}
        removeAllTodos={removeAllTodos}
      />
      <List>
        {todos
          .filter(val => {
            if (searchName === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, index) => {
            return (
              <ListItem
                key={index}
                index={index}
                val={val}
                updateIsCompleted={updateIsCompleted}
              />
            );
          })}
      </List>
    </>
  );
};

export default Presenter;