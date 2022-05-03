import { Todos } from '../../type/Todos';
import { fetchTodoType } from '../../type';

export type PresenterType = {
  myUser: {
    data: {
      id: number;
    };
  };
  todos: Todos[];
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  hasMore: boolean;
  isFetching: boolean;
  fetchTodo: fetchTodoType;
};
