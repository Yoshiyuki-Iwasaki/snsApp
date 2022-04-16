import React, { FC } from "react";
import Input from "../../components/atoms/input";
import { SignUpPageType } from "./type";

const Presenter: FC<SignUpPageType> = ({
  user,
  handleInputChange,
  handleCreateUser,
}) => {
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

export default Presenter;
