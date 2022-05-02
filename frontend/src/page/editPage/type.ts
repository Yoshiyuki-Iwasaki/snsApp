type updateTodoType = () => {};
type handleInputChangeType = (event: any) => void;

export type PresenterType = {
  myUser: {
    data: {
      id: number;
    };
  };
  currentTodo: {
    name: string;
    createdAt: string;
    user: {
      id: number;
    };
  };
  handleInputChange: handleInputChangeType;
  updateTodo: updateTodoType;
};
