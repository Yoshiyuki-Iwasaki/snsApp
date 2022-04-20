import React, { useState } from "react";
import UserApi from "../../api/User/api";
import { useNavigate } from "react-router-dom";
import { notify } from "../../util/notify";
import Presenter from "./presenter";

const SignUpPage = () => {
  const initialTodoState = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [user, setUser] = useState(initialTodoState);
  const navigate = useNavigate();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleCreateUser = async () => {
    await UserApi.create(user);
    notify("正常にユーザー作成が完了しました。");
    navigate("/signin");
  };
  return (
    <Presenter
      user={user}
      handleInputChange={handleInputChange}
      handleCreateUser={handleCreateUser}
    />
  );
};

export default SignUpPage;
