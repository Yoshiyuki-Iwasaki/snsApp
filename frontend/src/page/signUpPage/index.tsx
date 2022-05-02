import React from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useHandleAddUser from '../../hooks/useHandleAddUser';

const SignUpPage = () => {
  const initialTodoState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);
  const handleAddUser = useHandleAddUser(inputChange);

  return (
    <Presenter
      user={inputChange}
      handleInputChange={handleInputChange}
      handleAddUser={handleAddUser}
    />
  );
};

export default SignUpPage;
