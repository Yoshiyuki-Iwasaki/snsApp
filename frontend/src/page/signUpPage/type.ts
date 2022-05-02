type handleAddUserType = () => {};
type handleInputChangeType = (event: any) => void;

export type SignUpPageType = {
  user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  handleInputChange: handleInputChangeType;
  handleAddUser: handleAddUserType;
};
