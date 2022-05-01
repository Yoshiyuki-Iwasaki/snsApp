export type PresenterType = {
  user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  todos: any;
  searchName: string;
  setSearchName: any;
  hasMore: boolean;
  isFetching: boolean;
  fetchTodo: any;
};
