import React, { FC, useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { InputName, CurrentStatus } from "./style";
import Button from "../../components/atoms/button";
import TodoApi from "../../api/Todo/api";
import { notify } from "../../util/notify";
import { formatDate } from "../../util/data";
import Label from "../../components/atoms/label";

const EditPage: FC = () => {
  const params = useParams();
  const initialTodoState = {
    id: null,
    name: "",
    completed: false,
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

  const updateIsCompleted = async val => {
    const data = {
      id: val.id,
      name: val.name,
      completed: val.completed ? false : true,
    };
    const todoRes = await TodoApi.update(val.id, data);
    setCurrentTodo(todoRes.data);
    notify("正常に投稿の編集が完了しました。");
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
    <>
      <Label>Edit Todo</Label>
      <Label>{formatDate(currentTodo.createdAt)}</Label>
      <label htmlFor="name">Current Name</label>
      <InputName
        type="text"
        name="name"
        value={currentTodo.name}
        onChange={handleInputChange}
      />
      <Label>CurrentStatus</Label>
      <CurrentStatus>
        {currentTodo.completed ? "Completed" : "unCompleted"}
      </CurrentStatus>
      <Button onClick={() => updateIsCompleted(currentTodo)}>
        {currentTodo.completed ? "unCompleted" : "Completed"}
      </Button>
      <Button onClick={updateTodo}>Update</Button>
      <Button onClick={deleteTodo}>Delete</Button>
    </>
  );
};

export default EditPage;