import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import { List } from "./style";
import ListItem from "../../molecules/listItem";
import SearchArea from "../../molecules/searchArea";
import TodoApi from "../../../api/Todo/api";

const TodoApp: FC = () => {
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
    const sure = window.confirm("Are you sure?");
    if (sure) {
      await TodoApi.remove_all();
      setTodos([]);
    }
  };

  const updateIsCompleted = (index, val) => {
    const data = {
      id: val.id,
      name: val.name,
      is_completed: !val.is_completed,
    };

    axios.patch(`api/v1/todos/${val.id}`, data).then(res => {
      const newTodos: any = [...todos];
      newTodos[index].is_completed = res.data.is_completed;
      setTodos(newTodos);
    });
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
          .sort((a, b) => {
            if (a.id < b.id) {
              return 1;
            }
            if (a.id > b.id) {
              return -1;
            }
            return 0;
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

export default TodoApp;
