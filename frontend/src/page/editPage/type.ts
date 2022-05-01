type updateTodoType = () => {};
type deleteTodoType = () => {};

export type EditPage = {
  currentTodo: {
    name: string;
    createdAt: string;
  };
  handleInputChange: any;
  updateTodo: updateTodoType;
  deleteTodo: deleteTodoType;
};
