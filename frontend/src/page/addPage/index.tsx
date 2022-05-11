import React, { FC } from 'react';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useAddPost from '../../hooks/useAddPost';
import Presenter from './presenter';

const AddPage: FC = () => {
  const initialPostState = {
    id: null,
    content: '',
    user_id: '',
  };
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
