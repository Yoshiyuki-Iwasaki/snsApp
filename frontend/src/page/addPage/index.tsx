import React, { FC } from 'react';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useAddPost from '../../hooks/useAddPost';
import Presenter from './presenter';
import { initialPostState } from '../../util/state';

const AddPage: FC = () => {
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialPostState);
  const addPost = useAddPost(inputChange);

  return (
    <>
      <Presenter
        post={inputChange}
        addPost={addPost}
        handleInputChange={handleInputChange}
      />
    </>
  );
};

export default AddPage;
