import { Todos } from '../../type/Todos';
import { deleteTodoType } from '../../type';
import { handleModalType } from '../../type';
import { handleInputChangeType } from '../../type';
import { addReplyType } from '../../type';

export type DetailPageType = {
  params: {
    id: string;
  };
  currentTodo: {
    user: {
      id: number;
      name: string;
    };
    name: string;
    createdAt: string;
  };
  myUser: {
    data: {
      id: number;
    };
  };
  reply: {
    name: string;
  };
  replies: Todos[];
  modalOpen: boolean;
  deleteTodo: deleteTodoType;
  handleModal: handleModalType;
  handleInputChange: handleInputChangeType;
  addReply: addReplyType;
};
