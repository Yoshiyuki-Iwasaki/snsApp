import { Todos } from '../../type/Todos';
import { fetchTodoType } from '../../type';

export type PresenterType = {
  myUser: {
    data: {
      id: number;
    };
  };
  todos: Todos[];
  hasMore: boolean;
  isFetching: boolean;
  fetchTodo: fetchTodoType;
};
