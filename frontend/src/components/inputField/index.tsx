import React, { FC } from 'react';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import { useAddPost } from './hooks';
import Presenter from './presenter';
import { initialPostState } from '../../util/state';

const InputField: FC = () => {
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialPostState);
  const addPost = useAddPost(inputChange, setInputChange);

  return (
    <>
      <Presenter
        post={inputChange}
        addPost={(e) => addPost(e)}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default InputField;
