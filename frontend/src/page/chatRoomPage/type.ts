import { MyUserType } from '../../type/MyUser';
import { handleInputChangeType } from '../../type';

export type PresenterType = {
  myUser: MyUserType;
  chats: any;
  inputChange: {
    content: string;
  };
  addChat: any;
  handleInputChange: handleInputChangeType;
};
