type eventType = {
  target: {
    name: string;
    value: string;
  };
};

type handleAddUserType = () => {};
type handleInputChangeType = (event: eventType) => void;

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
