export type TodosType = {
  id: number;
  name: string;
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  createdAt: string;
};
