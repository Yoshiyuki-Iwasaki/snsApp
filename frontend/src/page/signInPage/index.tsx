import React, { FC, useState } from "react";
import UserApi from "../../api/User/api";
import { useNavigate } from "react-router-dom";
import { notify } from "../../util/notify";
import storageUtils from "../../util/storage";
import Presenter from "./presenter";
import { SigninPageType } from "./type";
import useHandleInputChange from "../../hooks/useHandleInputChange";

const SigninPage: FC<SigninPageType> = ({ fetchUser }) => {
  const initialTodoState = {
    email: "",
    password: "",
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);

  const navigate = useNavigate();
  const handleLogin = async () => {
    const data = {
      email: inputChange.email,
      password: inputChange.password,
    };
    try {
      const userRes = await UserApi.login(data);
      notify("正常にログインが完了しました。");
      navigate("/");
      storageUtils.saveTokens("userId", userRes.data.user.id);
      fetchUser();
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <Presenter
      todo={inputChange}
      handleInputChange={handleInputChange}
      handleLogin={handleLogin}
    />
  );
};

export default SigninPage;
