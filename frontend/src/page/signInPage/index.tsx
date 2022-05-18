import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import { useHandleLogin } from './hooks';
import { initialUserState } from '../../util/state';

const SigninPage: FC = () => {
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialUserState);
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
