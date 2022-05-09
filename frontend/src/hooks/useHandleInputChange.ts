import { useState } from 'react';

// Inputのvalue値を管理するcustom hooks.
const useHandleInputChange = (initialPostState) => {
  const [inputChange, setInputChange] = useState(initialPostState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputChange({ ...inputChange, [name]: value });
  };

  return { inputChange, setInputChange, handleInputChange };
};

export default useHandleInputChange;
