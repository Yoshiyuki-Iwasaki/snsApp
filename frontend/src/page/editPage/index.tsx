import React, { FC, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TodoApi from "../../api/Todo/api";
import { notify } from "../../util/notify";
import Presenter from "./presenter";
import useHandleInputChange from "../../hooks/useHandleInputChange";

const EditPage: FC = () => {
  const params = useParams();
  const initialTodoState = {
    id: null,
    name: "",
    createdAt: "",
  };
  const navigate = useNavigate();
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);

  const fetchTodoData = async id => {
    const todoRes = await TodoApi.show(id);
    setInputChange(todoRes.data);
    console.log("todoRes", todoRes);
  };

  const updateTodo = async () => {
    const todoRes = await TodoApi.update(inputChange.id, inputChange);
    setInputChange(todoRes.data);
    notify("正常に投稿の編集が完了しました。");
    navigate("/");
  };

  const deleteTodo = async () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      await TodoApi.remove(inputChange.id);
      notify("正常に投稿の編集が完了しました。");
      navigate("/");
    }
  };

  useEffect(() => {
    fetchTodoData(Number(params.id));
  }, []);

  return (
    <Presenter
      currentTodo={inputChange}
      handleInputChange={handleInputChange}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default EditPage;
