import { PostsType } from '../../type/Posts';
import { MyUserType } from '../../type/MyUser';
import { fetchPostType } from '../../type';

export type PresenterType = {
  myUser: MyUserType;
  posts: PostsType[];
  hasMore: boolean;
  isFetching: boolean;
  fetchPost: fetchPostType;
};
