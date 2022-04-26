import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import TodoApi from "../../api/Todo/api";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import { notify } from "../../util/notify";
import Presenter from "./presenter";
import useFetchMyUser from "../../hooks/useFetchMyUser";

const AddPage: FC = () => {
  const { myUser } = useFetchMyUser();
  const navigate = useNavigate();
  const initialTodoState = {
    id: null,
    name: "",
    user_id: "",
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);

  const addTodo = async () => {
    const data = {
      name: inputChange.name,
      user_id: myUser.data.id,
    };
    await TodoApi.create(data);
    notify("正常に投稿が完了しました。");
    navigate("/");
  };

  return (
    <>
      <Presenter
        todo={inputChange}
        addTodo={addTodo}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default AddPage;
