type eventType = {
  target: {
    name: string;
    value: string;
  };
};

type handleInputChangeType = (event: eventType) => void;
type addTodoType = () => {};

export type PresenterType = {
  todo: {
    name: string;
  };
  addTodo: addTodoType;
  handleInputChange: handleInputChangeType;
};
