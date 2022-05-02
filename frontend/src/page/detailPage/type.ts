import { Todos } from '../../type/Todos';

type addReplyType = () => {};
type deleteTodoType = () => {};
type handleInputChangeType = (event: any) => void;
type handleModalType = () => void;

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
