import React, { FC, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { InputAndButton, Icon } from "./style";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";
import TodoApi from "../../api/Todo/api";
import { notify } from "../../util/notify";
import Label from "../../components/atoms/label";

const AddPage: FC<any> = ({ user }) => {
  user && console.log(user.id);
  const initialTodoState = {
    id: null,
    name: "",
    completed: false,
    user_id: "",
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
      user_id: user.id,
    };
    console.log("data", data);
    await TodoApi.create(data);
    notify("正常に投稿が完了しました。");
    navigate("/");
  };

  return (
    <>
      <Label>新規投稿</Label>
      {/* <InputAndButton onSubmit={e => addTodo(e)}> */}
      <Input name={"name"} value={todo.name} onChange={handleInputChange} />
      <Button
        onClick={addTodo}
        disabled={!todo.name || /^\s*$/.test(todo.name)}
      >
        <Icon>
          <FiSend />
        </Icon>
      </Button>
      {/* </InputAndButton> */}
    </>
  );
};

export default AddPage;
