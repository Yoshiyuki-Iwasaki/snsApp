import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoApi from "../../api/Todo/api";
import { notify } from "../../util/notify";
import Presenter from "./presenter";
import { AddPageType } from "./type";

const AddPage: FC<AddPageType> = ({ myuser }) => {
  const initialTodoState = {
    id: null,
    name: "",
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
      user_id: myuser.id,
    };
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
