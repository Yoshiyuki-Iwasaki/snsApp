import { handleInputChangeType } from '../../type';
import { updateTodoType } from '../../type';

export type PresenterType = {
  myUser: {
    data: {
      id: number;
    };
  };
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
