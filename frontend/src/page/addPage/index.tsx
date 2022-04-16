import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoApi from "../../api/Todo/api";
import { notify } from "../../util/notify";
import Presenter from "./presenter";
import { AddPageType } from "./type";

const AddPage: FC<AddPageType> = ({ user }) => {
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
      <Presenter
        todo={todo}
        addTodo={addTodo}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default AddPage;
