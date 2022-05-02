import { Todos } from '../../type/Todos';

type fetchTodoType = (page: number) => {};

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
