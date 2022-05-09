import React from 'react';
import Presenter from './presenter';
import { useParams } from 'react-router-dom';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import useFetchReply from '../../hooks/useFetchReply';
import useFetchCurrentPost from '../../hooks/useFetchCurrentPost';
import useAddReply from '../../hooks/useAddReply';
import useDeletePost from '../../hooks/useDeletePost';
import useModalOpen from '../../hooks/useModalOpen';

const DetailPage = () => {
  const { myUser } = useFetchMyUser();
  const { id } = useParams();
  const initialReplyState = {
    id: null,
    name: '',
    user_id: '',
    post_id: '',
    createdAt: '',
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialReplyState);
  const { replies } = useFetchReply();
  const currentPost = useFetchCurrentPost();
  const addReply = useAddReply(inputChange, { id }, currentPost);
  const deletePost = useDeletePost({ id });
  const { modalOpenFrag, handleModal } = useModalOpen();

  return (
    <Presenter
      currentPost={currentPost}
      myUser={myUser}
      reply={inputChange}
      replies={replies}
      modalOpenFrag={modalOpenFrag}
      deletePost={deletePost}
      handleModal={handleModal}
      handleInputChange={handleInputChange}
      addReply={addReply}
    />
  );
};

export default DetailPage;
