import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useUpdatePost from '../../hooks/useUpdatePost';
import useFetchCurrentPost from '../../hooks/useFetchCurrentPost';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import { initialEditPostState } from '../../util/state';

const EditPage: FC = () => {
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialEditPostState);
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
