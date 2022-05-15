export type PostsType = {
  id: number;
  content: string;
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  createdAt: string;
};
