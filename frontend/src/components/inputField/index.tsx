import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import { initialPostState } from '../../util/state';
import { useAddPost } from './hooks';

const InputField: FC = () => {
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialPostState);
  const addPost = useAddPost(inputChange);

  return (
    <Presenter
      post={inputChange}
      addPost={addPost}
      handleInputChange={handleInputChange}
    />
  );
};

export default InputField;
