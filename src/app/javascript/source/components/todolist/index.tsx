import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import {
  List,
  ListItem,
  SearchArea,
  SearchInput,
  RemoveButton,
  Checkedbox,
  Uncheckedbox,
  EditButton,
} from "./style";
import { Link } from "react-router-dom";

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
      <SearchArea>
        <SearchInput
          type="text"
          placeholder="Search todo."
          onChange={e => {
            setSearchName(e.target.value);
          }}
        />
        <RemoveButton onClick={removeAllTodos}>Remove All</RemoveButton>
      </SearchArea>
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
              <ListItem key={index}>
                {val.is_completed ? (
                  <Checkedbox>
                    <ImCheckboxChecked
                      onClick={() => updateIsCompleted(index, val)}
                    />
                  </Checkedbox>
                ) : (
                  <Uncheckedbox>
                    <ImCheckboxUnchecked
                      onClick={() => updateIsCompleted(index, val)}
                    />
                  </Uncheckedbox>
                )}
                {val.name}
                <Link to={"/todos/" + val.id + "/edit"}>
                  <EditButton>
                    <AiFillEdit />
                  </EditButton>
                </Link>
              </ListItem>
            );
          })}
      </List>
    </>
  );
};

export default TodoList;
