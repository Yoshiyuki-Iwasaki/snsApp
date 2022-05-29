import React, { FC } from 'react';
import { ListMenuType } from './type';
import Presenter from './presenter';
import useModalOpen from '../../hooks/useModalOpen';

const ListMenu: FC<ListMenuType> = ({
  myUser,
  postedUser,
  replyFrag = false,
  val,
  deletePost,
}) => {
  const { modalOpenFrag, handleModal } = useModalOpen();
  return (
    <>
      <Presenter
        myUser={myUser}
        postedUser={postedUser}
        modalOpenFrag={modalOpenFrag}
        replyFrag={replyFrag}
        val={val}
        handleModal={handleModal}
        deletePost={deletePost}
      />
    </>
  );
};

export default ListMenu;
