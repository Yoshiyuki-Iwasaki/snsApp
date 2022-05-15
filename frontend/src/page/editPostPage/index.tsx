import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useUpdatePost from '../../hooks/useUpdatePost';
import useFetchCurrentPost from '../../hooks/useFetchCurrentPost';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const EditPage: FC = () => {
  const initialPostState = {
    id: null,
    content: '',
    createdAt: '',
  };
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialPostState);
  const updatePost = useUpdatePost(inputChange, setInputChange);
  useFetchCurrentPost(inputChange, setInputChange);
  const { myUser } = useFetchMyUser();

  return (
    <Presenter
      myUser={myUser}
      currentPost={inputChange}
      handleInputChange={handleInputChange}
      updatePost={updatePost}
    />
  );
};

export default EditPage;
