type eventType = {
  target: {
    name: string;
    value: string;
  };
};

type handleInputChangeType = (event: eventType) => void;
type handleLoginType = () => {};

export type PresenterType = {
  loginInfo: {
    id: number;
    email: string;
    password: string;
  };
  handleInputChange: handleInputChangeType;
  handleLogin: handleLoginType;
};
