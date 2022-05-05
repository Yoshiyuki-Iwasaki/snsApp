import { Todos } from '../../type/Todos';
import { MyUserType } from '../../type/MyUser';
import { fetchTodoType } from '../../type';

export type PresenterType = {
  myUser: MyUserType;
  todos: Todos[];
  hasMore: boolean;
  isFetching: boolean;
  fetchTodo: fetchTodoType;
};
