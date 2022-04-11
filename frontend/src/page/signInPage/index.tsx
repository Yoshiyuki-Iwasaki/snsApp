import React, { useState } from "react";
import UserApi from "../../api/User/api";
import { useNavigate } from "react-router-dom";
import { notify } from "../../util/notify";
import Input from "../../components/atoms/input";
import storageUtils from "../../util/storage";

const SigninPage = ({ fetchUser }) => {
  const initialTodoState = {
    email: "",
    password: "",
  };
  const [todo, setTodo] = useState(initialTodoState);
  const handleInputChange = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    const data = {
      email: todo.email,
      password: todo.password,
    };
    try {
      const userRes = await UserApi.create(data);
      notify("正常に投稿が完了しました。");
      navigate("/");
      storageUtils.saveTokens("userId", userRes.data.user.id);
      console.log(userRes.data.user.id);
      fetchUser();
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <>
      <label htmlFor="email">email</label>
      <Input name="email" value={todo.email} onChange={handleInputChange} />

      <label htmlFor="password">password</label>
      <Input
        name="password"
        value={todo.password}
        onChange={handleInputChange}
      />

      <button onClick={handleLogin}>button</button>
    </>
  );
};

export default SigninPage;
