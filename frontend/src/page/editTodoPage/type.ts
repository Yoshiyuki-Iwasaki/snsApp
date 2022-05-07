import { MyUserType } from '../../type/MyUser';
import { TodosType } from '../../type/Todos';
import { handleInputChangeType } from '../../type';
import { updateTodoType } from '../../type';

export type PresenterType = {
  myUser: MyUserType;
  currentTodo: TodosType;
  handleInputChange: handleInputChangeType;
  updateTodo: updateTodoType;
};
