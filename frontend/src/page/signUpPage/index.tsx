import React, { useState } from "react";
import UserApi from "../../api/User/api";
import { useNavigate } from "react-router-dom";
import { notify } from "../../util/notify";
import Input from "../../components/atoms/input";

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
    console.log(user);
  };
  const handleCreateUser = async () => {
    await UserApi.create(user);
    notify("正常にユーザー作成が完了しました。");
    navigate("/signin");
  };
  return (
    <>
      <label htmlFor="name">name</label>
      <Input name="name" value={user.name} onChange={handleInputChange} />

      <label htmlFor="email">email</label>
      <Input name="email" value={user.email} onChange={handleInputChange} />

      <label htmlFor="password">password</label>
      <Input
        name="password"
        value={user.password}
        onChange={handleInputChange}
      />

      <label htmlFor="password_confirmation">password_confirmation</label>
      <Input
        name="password_confirmation"
        value={user.password_confirmation}
        onChange={handleInputChange}
      />

      <button onClick={handleCreateUser}>button</button>
    </>
  );
};

export default SignUpPage;
