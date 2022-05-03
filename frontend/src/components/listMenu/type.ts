import { deleteTodoType } from '../../type';
import { handleModalType } from '../../type';

export type ListMenuType = {
  myUser: {
    data: {
      id: number;
    };
  };
  postedUser: {
    id: number;
    name: string;
  };
  replyFrag?: boolean;
  modalOpenFrag: boolean;
  val: {
    id: number;
    createdAt: string;
    name: string;
  };
  handleModal: handleModalType;
  deleteTodo: deleteTodoType;
};
