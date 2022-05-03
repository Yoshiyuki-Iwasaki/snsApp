import { handleInputChangeType } from '../../type';
import { handleLoginType } from '../../type';

export type PresenterType = {
  signInInfo: {
    id: number;
    email: string;
    password: string;
  };
  handleInputChange: handleInputChangeType;
  handleLogin: handleLoginType;
};
