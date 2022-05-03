import { handleInputChangeType } from '../../type';
import { addTodoType } from '../../type';

export type PresenterType = {
  todo: {
    name: string;
  };
  addTodo: addTodoType;
  handleInputChange: handleInputChangeType;
};
