import { useState } from 'react';

const useHandleInputChange = (initialTodoState) => {
  const [inputChange, setInputChange] = useState(initialTodoState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputChange({ ...inputChange, [name]: value });
  };

  return { inputChange, setInputChange, handleInputChange };
};

export default useHandleInputChange;
