import React, { FC } from 'react';
import { ListMenuType } from './type';
import Presenter from './presenter';

const ListMenu: FC<ListMenuType> = ({
  myUser,
  postedUser,
  modalOpenFrag,
  replyFrag = false,
  val,
  handleModal,
  deletePost,
}) => {
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
