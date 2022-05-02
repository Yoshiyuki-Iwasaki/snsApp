type addTodoType = () => {};
type handleInputChangeType = (event: any) => void;

export type PresenterType = {
  todo: {
    name: string;
  };
  addTodo: addTodoType;
  handleInputChange: handleInputChangeType;
};
