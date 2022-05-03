import { handleInputChangeType } from '../../type';
import { handleLoginType } from '../../type';

export type PresenterType = {
  loginInfo: {
    id: number;
    email: string;
    password: string;
  };
  handleInputChange: handleInputChangeType;
  handleLogin: handleLoginType;
};
