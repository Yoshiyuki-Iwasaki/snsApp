import React, { FC } from 'react';
import { ListMenuType } from './type';
import Presenter from './presenter';

const ListMenu: FC<ListMenuType> = ({
  myUser,
  postedUser,
  modalOpen,
  val,
  handleModal,
  deleteTodo,
}) => {
  return (
    <>
      <Presenter
        myUser={myUser}
        postedUser={postedUser}
        modalOpen={modalOpen}
        val={val}
        handleModal={handleModal}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default ListMenu;
