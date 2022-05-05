import { TodosType } from '../../type/Todos';
import { MyUserType } from '../../type/MyUser';
import { deleteTodoType } from '../../type';
import { handleModalType } from '../../type';
import { handleInputChangeType } from '../../type';
import { addReplyType } from '../../type';

export type DetailPageType = {
  currentTodo: TodosType;
  myUser: MyUserType;
  reply: {
    name: string;
  };
  replies: TodosType[];
  modalOpenFrag: boolean;
  deleteTodo: deleteTodoType;
  handleModal: handleModalType;
  handleInputChange: handleInputChangeType;
  addReply: addReplyType;
};
