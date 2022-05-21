import { handleInputChangeType } from '../../type';
import { handleLoginType } from '../../type';

export type PresenterType = {
  editProfile: {
    name: string;
    email: string;
  };
  handleInputChange: handleInputChangeType;
  handleEditProfile: () => {};
  onChangeImage: any;
};
