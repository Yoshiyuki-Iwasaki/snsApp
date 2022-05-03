import React from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useCreateUser from '../../hooks/useCreateUser';

const SignUpPage = () => {
  const initialTodoState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);
  const handleAddUser = useCreateUser(inputChange);

  return (
    <Presenter
      user={inputChange}
      handleInputChange={handleInputChange}
      handleAddUser={handleAddUser}
    />
  );
};

export default SignUpPage;
