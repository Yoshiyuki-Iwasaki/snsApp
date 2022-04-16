import React, { FC } from "react";
import Input from "../../components/atoms/input";
import { PresenterType } from "./type";

const Presenter: FC<PresenterType> = ({
  todo,
  handleInputChange,
  handleLogin,
}) => {
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

export default Presenter;
