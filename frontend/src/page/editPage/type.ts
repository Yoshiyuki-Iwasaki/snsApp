type eventType = {
  target: {
    name: string;
    value: string;
  };
};

type handleInputChangeType = (event: eventType) => void;
type updateTodoType = () => {};

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
