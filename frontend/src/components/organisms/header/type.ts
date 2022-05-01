type handleLogoutType = () => {};

export type PresenterType = {
  myUser: {
    isLogin: boolean;
    data: {
      id: number;
      name: string;
    };
  };
  handleLogout: handleLogoutType;
};
