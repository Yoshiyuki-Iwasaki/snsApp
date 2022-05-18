import React, { FC } from 'react';
import Presenter from './presenter';
import { ListItemType } from './type';
import { useFetchFavorite } from './hooks';
import { useHandleLike } from './hooks';
import { useHandleUnlike } from './hooks';
import useDeletePost from '../../hooks/useDeletePost';
import useModalOpen from '../../hooks/useModalOpen';

const ListItem: FC<ListItemType> = ({ myUser, postedUser, val, replyFrag }) => {
  const { favorite, fetchFavorite } = useFetchFavorite(val, replyFrag);
  const handleLike = useHandleLike(val, myUser, fetchFavorite, replyFrag);
  const handleUnlike = useHandleUnlike(favorite, fetchFavorite);
  const deletePost = useDeletePost(val, replyFrag);
  const { modalOpenFrag, handleModal } = useModalOpen();

  return (
    <Presenter
      val={val}
      myUser={myUser}
      postedUser={postedUser}
      favorite={favorite}
      replyFrag={replyFrag}
      modalOpenFrag={modalOpenFrag}
      handleLike={handleLike}
      handleUnlike={handleUnlike}
      handleModal={handleModal}
      deletePost={deletePost}
    />
  );
};

export default ListItem;
