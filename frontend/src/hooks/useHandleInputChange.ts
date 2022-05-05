import { useState } from 'react';

// Inputのvalue値を管理するcustom hooks.
const useHandleInputChange = (initialTodoState) => {
  const [inputChange, setInputChange] = useState(initialTodoState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputChange({ ...inputChange, [name]: value });
  };

  return { inputChange, setInputChange, handleInputChange };
};

export default useHandleInputChange;
