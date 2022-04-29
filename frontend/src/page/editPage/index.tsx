import React, { FC } from "react";
import "react-toastify/dist/ReactToastify.css";
import Presenter from "./presenter";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import useUpdateTodo from "../../hooks/useUpdateTodo";
import useFetchCurrentTodo from "../../hooks/useFetchCurrentTodo";

const EditPage: FC = () => {
  const initialTodoState = {
    id: null,
    name: "",
    createdAt: "",
  };
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);
  const deleteTodo = useDeleteTodo(inputChange);
  const updateTodo = useUpdateTodo(inputChange, setInputChange);
  useFetchCurrentTodo(inputChange, setInputChange);

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
