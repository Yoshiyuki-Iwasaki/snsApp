import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../util/notify";
import Presenter from "./presenter";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import UserApi from "../../api/User/api";

const SignUpPage = () => {
  const initialTodoState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const navigate = useNavigate();
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);

  const handleCreateUser = async () => {
    await UserApi.create(inputChange);
    notify("正常にユーザー作成が完了しました。");
    navigate("/signin");
  };
  return (
    <Presenter
      user={inputChange}
      handleInputChange={handleInputChange}
      handleCreateUser={handleCreateUser}
    />
  );
};

export default SignUpPage;
