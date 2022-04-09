import React, { FC, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Title, InputAndButton, Icon } from "./style";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";
import TodoApi from "../../api/Todo/api";
import { notify } from "../../util/notify";

const AddTodo: FC = () => {
  const initialTodoState = {
    id: null,
    name: "",
    completed: false,
  };
  const [todo, setTodo] = useState(initialTodoState);
  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const addTodo = async () => {
    const data = {
      name: todo.name,
    };
    const todoRes = await TodoApi.create(data);
    setTodo({
      id: todoRes.data.id,
      name: todoRes.data.name,
      completed: false,
    });
    notify("正常に投稿が完了しました。");
    navigate("/");
  };

  return (
    <>
      <Title>新規投稿</Title>
      <InputAndButton>
        <Input value={todo.name} onChange={handleInputChange} />
        <Button
          onClick={addTodo}
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
