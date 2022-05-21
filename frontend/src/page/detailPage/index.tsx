import React from 'react';
import Presenter from './presenter';
import { useParams } from 'react-router-dom';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import { useFetchReply } from './hooks';
import useFetchCurrentPost from '../../hooks/useFetchCurrentPost';
import { useAddReply } from './hooks';
import useDeletePost from '../../hooks/useDeletePost';
import useModalOpen from '../../hooks/useModalOpen';
import {
  useFetchFavorite,
  useHandleLike,
  useHandleUnlike,
} from '../../components/listItem/hooks';
import { initialReplyState } from '../../util/state';

const DetailPage = () => {
  const { myUser } = useFetchMyUser();
  const { id } = useParams();
  const { inputChange, setInputChange, handleInputChange } =
    useHandleInputChange(initialReplyState);
  const { replies } = useFetchReply();
  const currentPost = useFetchCurrentPost();
  const addReply = useAddReply(
    inputChange,
    setInputChange,
    { id },
    currentPost
  );
  const deletePost = useDeletePost({ id });
  const { modalOpenFrag, handleModal } = useModalOpen();
  const { favorite, fetchFavorite } = useFetchFavorite(currentPost, false);
  const handleLike = useHandleLike(currentPost, myUser, fetchFavorite, false);
  const handleUnlike = useHandleUnlike(favorite, fetchFavorite);

  return (
    <Presenter
      currentPost={currentPost}
      myUser={myUser}
      reply={inputChange}
      replies={replies}
      favorite={favorite}
      modalOpenFrag={modalOpenFrag}
      deletePost={deletePost}
      handleModal={handleModal}
      handleInputChange={handleInputChange}
      addReply={(e) => addReply(e)}
      handleLike={handleLike}
      handleUnlike={handleUnlike}
    />
  );
};

export default DetailPage;
