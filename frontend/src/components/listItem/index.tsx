import React, { FC } from 'react';
import Presenter from './presenter';
import { ListItemType } from './type';
import useFetchFavorite from '../../hooks/useFetchFavorite';
import useHandleLike from '../../hooks/useHandleLike';
import useHandleUnlike from '../../hooks/useHandleUnlike';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useModalOpen from '../../hooks/useModalOpen';

const ListItem: FC<ListItemType> = ({ myUser, postedUser, val, replyFrag }) => {
  const { favorite, fetchFavorite } = useFetchFavorite(val, replyFrag);
  const handleLike = useHandleLike(val, myUser, fetchFavorite, replyFrag);
  const handleUnlike = useHandleUnlike(favorite, fetchFavorite);
  const deleteTodo = useDeleteTodo(val, replyFrag);
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
      deleteTodo={deleteTodo}
    />
  );
};

export default ListItem;
