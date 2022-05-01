type addTodoType = () => {};

export type PresenterType = {
  todo: {
    name: string;
  };
  addTodo: addTodoType;
  handleInputChange: any;
};
