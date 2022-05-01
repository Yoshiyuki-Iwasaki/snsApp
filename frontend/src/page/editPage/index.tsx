import React, { FC } from "react";
import "react-toastify/dist/ReactToastify.css";
import Presenter from "./presenter";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import useUpdateTodo from "../../hooks/useUpdateTodo";
import useFetchCurrentTodo from "../../hooks/useFetchCurrentTodo";
import useFetchMyUser from "../../hooks/useFetchMyUser";

const EditPage: FC = () => {
  const initialTodoState = {
    id: null,
    name: "",
    createdAt: "",
  };
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);
  const updateTodo = useUpdateTodo(inputChange, setInputChange);
  useFetchCurrentTodo(inputChange, setInputChange);
  const { myUser } = useFetchMyUser();

  return (
    <Presenter
      myUser={myUser}
      currentTodo={inputChange}
      handleInputChange={handleInputChange}
      updateTodo={updateTodo}
    />
  );
};

export default EditPage;
