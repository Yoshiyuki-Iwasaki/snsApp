import { TodosType } from '../../type/Todos';
import { MyUserType } from '../../type/MyUser';
import { fetchTodoType } from '../../type';

export type PresenterType = {
  myUser: MyUserType;
  todos: TodosType[];
  hasMore: boolean;
  isFetching: boolean;
  fetchTodo: fetchTodoType;
};
