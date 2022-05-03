import React, { FC } from 'react';
import { ListMenuType } from './type';
import Presenter from './presenter';

const ListMenu: FC<ListMenuType> = ({
  myUser,
  user,
  modalOpen,
  detailPageFrag,
  val,
  handleModal,
  deleteTodo,
}) => {
  return (
    <>
      <Presenter
        myUser={myUser}
        user={user}
        modalOpen={modalOpen}
        detailPageFrag={detailPageFrag}
        val={val}
        handleModal={handleModal}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default ListMenu;
