import React, { FC } from "react";
import Presenter from "./presenter";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import useHandleLogin from "../../hooks/useHandleLogin";

const SigninPage: FC = () => {
  const initialTodoState = {
    email: "",
    password: "",
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);
  const handleLogin = useHandleLogin(inputChange);

  return (
    <Presenter
      loginInfo={inputChange}
      handleInputChange={handleInputChange}
      handleLogin={handleLogin}
    />
  );
};

export default SigninPage;
