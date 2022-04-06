import React, { FC, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Title, InputAndButton, Input, Button, Icon } from "./style";

toast.configure();

const AddTodo: FC = () => {
  const initialTodoState = {
    id: null,
    name: "",
    is_completed: false,
  };
  const [todo, setTodo] = useState(initialTodoState);
  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const notify = () => {
    toast.success("Todo successfully create.", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    });
  };
  const saveTodo = () => {
    const data = {
      name: todo.name,
    };
    axios
      .post("/api/v1/todos", data)
      .then(res => {
        setTodo({
          id: res.data.id,
          name: res.data.name,
          is_completed: res.data.is_completed,
        });
        notify();
        navigate("/todos");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
      <Title>AddTodo</Title>
      <InputAndButton>
        <Input
          type="text"
          required
          value={todo.name}
          name="name"
          onChange={handleInputChange}
        />
        <Button
          onClick={saveTodo}
          disabled={!todo.name || /^\s*$/.test(todo.name)}
        >
          <Icon>
            <FiSend />
          </Icon>
        </Button>
      </InputAndButton>
    </>
  );
};

export default AddTodo;
