import React, { FC } from 'react';
import Presenter from './presenter';
import { ListItemType } from './type';
import useDeletePost from '../../hooks/useDeletePost';
import useModalOpen from '../../hooks/useModalOpen';

const ListItem: FC<ListItemType> = ({ myUser, postedUser, val, replyFrag }) => {
  const deletePost = useDeletePost(val, replyFrag);
  const { modalOpenFrag, handleModal } = useModalOpen();

  return (
    <Presenter
      val={val}
      myUser={myUser}
      postedUser={postedUser}
      replyFrag={replyFrag}
      modalOpenFrag={modalOpenFrag}
      handleModal={handleModal}
      deletePost={deletePost}
    />
  );
};

export default ListItem;
