import { handleLogoutType } from '../../type';

export type PresenterType = {
  handleLogout: handleLogoutType;
  myUser: {
    isLogin: boolean;
    data: {
      id: number;
      name: string;
    };
  };
};
