import React, { FC, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TodoApi from "../../api/Todo/api";
import { notify } from "../../util/notify";
import Presenter from "./presenter";

const EditPage: FC = () => {
  const params = useParams();
  const initialTodoState = {
    id: null,
    name: "",
    createdAt: "",
  };
  const [currentTodo, setCurrentTodo] = useState(initialTodoState);
  const navigate = useNavigate();

  const fetchTodoData = async id => {
    const todoRes = await TodoApi.fetch_detail(id);
    setCurrentTodo(todoRes.data);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const updateTodo = async () => {
    const todoRes = await TodoApi.update(currentTodo.id, currentTodo);
    setCurrentTodo(todoRes.data);
    notify("正常に投稿の編集が完了しました。");
    navigate("/");
  };

  const deleteTodo = async () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      await TodoApi.remove(currentTodo.id);
      notify("正常に投稿の編集が完了しました。");
      navigate("/");
    }
  };

  useEffect(() => {
    fetchTodoData(params.id);
  }, [params.id]);

  return (
    <Presenter
      currentTodo={currentTodo}
      handleInputChange={handleInputChange}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default EditPage;
