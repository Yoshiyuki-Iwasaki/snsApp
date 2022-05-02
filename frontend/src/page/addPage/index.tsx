import React, { FC } from 'react';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useAddTodo from '../../hooks/useAddTodo';
import Presenter from './presenter';

const AddPage: FC = () => {
  const initialTodoState = {
    id: null,
    name: '',
    user_id: '',
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialTodoState);
  const addTodo = useAddTodo(inputChange);

  return (
    <>
      <Presenter
        todo={inputChange}
        addTodo={addTodo}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default AddPage;
