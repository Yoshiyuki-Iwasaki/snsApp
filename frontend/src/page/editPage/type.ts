type updateTodoType = () => {};

export type EditPage = {
  currentTodo: {
    name: string;
    createdAt: string;
  };
  handleInputChange: any;
  updateTodo: updateTodoType;
};
