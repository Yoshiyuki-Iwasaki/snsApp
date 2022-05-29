import { PostsType } from '../../type/Posts';
import { MyUserType } from '../../type/MyUser';

export type PresenterType = {
  id: number | string;
  myUser: MyUserType;
  posts: PostsType[];
  users: {
    id: number;
    name: string;
  }[];
};
