import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useHandleLogin from '../../hooks/useHandleLogin';

const SigninPage: FC = () => {
  const initialPostState = {
    email: '',
    password: '',
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialPostState);
  const handleLogin = useHandleLogin(inputChange);

  return (
    <Presenter
      signInInfo={inputChange}
      handleInputChange={handleInputChange}
      handleLogin={handleLogin}
    />
  );
};

export default SigninPage;
