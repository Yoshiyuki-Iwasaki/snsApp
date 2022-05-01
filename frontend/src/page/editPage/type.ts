type updateTodoType = () => {};

export type EditPage = {
  myUser: any;
  currentTodo: {
    name: string;
    createdAt: string;
    user: any;
  };
  handleInputChange: any;
  updateTodo: updateTodoType;
};
