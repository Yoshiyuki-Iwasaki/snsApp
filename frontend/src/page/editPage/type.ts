import { MyUserType } from '../../type/MyUser';
import { handleInputChangeType } from '../../type';
import { updateTodoType } from '../../type';

export type PresenterType = {
  myUser: MyUserType;
  currentTodo: {
    name: string;
    createdAt: string;
    user: {
      id: number;
    };
  };
  handleInputChange: handleInputChangeType;
  updateTodo: updateTodoType;
};
