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
  deleteTodo,
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
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default ListMenu;
