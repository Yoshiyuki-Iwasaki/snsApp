import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import { List } from "./style";
import ListItem from "../../molecules/listItem";
import SearchArea from "../../molecules/searchArea";

const TodoApp: FC = () => {
  const [todos, setTodos] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/todos.json")
      .then(res => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const removeAllTodos = () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      axios
        .delete("/api/v1/todos/destroy_all")
        .then(res => {
          setTodos([]);
        })
        .catch(e => {
          console.log(e);
        });
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
