type handleAddUserType = () => {};

export type SignUpPageType = {
  user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  handleInputChange: any;
  handleAddUser: handleAddUserType;
};
