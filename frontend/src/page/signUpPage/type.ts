import { handleInputChangeType } from '../../type';
import { handleAddUserType } from '../../type';

export type SignUpPageType = {
  signUpInfo: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  handleInputChange: handleInputChangeType;
  handleAddUser: handleAddUserType;
};
