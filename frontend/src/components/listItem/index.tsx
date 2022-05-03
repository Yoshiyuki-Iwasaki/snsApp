import React, { FC } from 'react';
import Presenter from './presenter';
import { ListItemType } from './type';
import useFetchFavorite from '../../hooks/useFetchFavorite';
import useHandleLike from '../../hooks/useHandleLike';
import useHandleUnlike from '../../hooks/useHandleUnlike';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useModalOpen from '../../hooks/useModalOpen';

const ListItem: FC<ListItemType> = ({
  myUser,
  postedUser,
  val,
  replyFrag,
  detailPageFrag,
}) => {
  const { favorite, fetchFavorite } = useFetchFavorite(val, detailPageFrag);
  const handleLike = useHandleLike(val, myUser, fetchFavorite, detailPageFrag);
  const handleUnlike = useHandleUnlike(favorite, fetchFavorite);
  const deleteTodo = useDeleteTodo(val, detailPageFrag);
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
