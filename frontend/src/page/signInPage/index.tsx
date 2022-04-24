import React, { FC } from "react";
import UserApi from "../../api/User/api";
import { useNavigate } from "react-router-dom";
import { notify } from "../../util/notify";
import Presenter from "./presenter";
import { SigninPageType } from "./type";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import Cookies from "js-cookie";
import useFetchUser from "../../hooks/useFetchUser";

const SigninPage: FC = () => {
  const { fetchUser } = useFetchUser();
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
      const res = await UserApi.login(data);
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);
      notify("正常にログインが完了しました。");
      navigate("/");
      fetchUser();
      console.log("res", res);
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
