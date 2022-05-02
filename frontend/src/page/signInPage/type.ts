type handleLoginType = () => {};
type handleInputChangeType = (event: any) => void;

export type PresenterType = {
  loginInfo: {
    id: number;
    email: string;
    password: string;
  };
  handleInputChange: handleInputChangeType;
  handleLogin: handleLoginType;
};
