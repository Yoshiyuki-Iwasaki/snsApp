import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import { Title, Content, SearchForm, RemoveButton } from "./style";

const TodoList: FC = () => {
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
        .delete("/api/v1/todos/destory_all")
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

    axios.patch(`api/v1/todos${val.id}`, data).then(res => {
      const newTodos: any = [...todos];
      newTodos[index].is_completed = res.data.is_completed;
      setTodos(newTodos);
    });
  };

  return (
    <>
      <Title>TodoList</Title>
      <SearchForm
        type="text"
        placeholder="Search todo."
        onChange={e => {
          setSearchName(e.target.value);
        }}
      ></SearchForm>
      <RemoveButton onClick={removeAllTodos}>Remove All</RemoveButton>
      <Content>
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
            return <div key={index}>{val.name}</div>;
          })}
      </Content>
    </>
  );
};

export default TodoList;
