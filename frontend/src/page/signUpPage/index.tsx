import React from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useCreateUser from '../../hooks/useCreateUser';

const SignUpPage = () => {
  const initialPostState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialPostState);
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
