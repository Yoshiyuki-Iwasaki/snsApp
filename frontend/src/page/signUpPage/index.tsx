import React from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import { useCreateUser } from './hooks';
import { initialUserState } from '../../util/state';

const SignUpPage = () => {
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialUserState);
  const handleAddUser = useCreateUser(inputChange);

  return (
    <Presenter
      signUpInfo={inputChange}
      handleInputChange={handleInputChange}
      handleAddUser={handleAddUser}
    />
  );
};

export default SignUpPage;
