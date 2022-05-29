import { PostsType } from '../../type/Posts';
import { MyUserType } from '../../type/MyUser';
import { handleUnfollowType } from '../../type';
import { handleFollowType } from '../../type';
import { RoomsType } from '@/type/Room';
import { UserType } from '@/api/User/type';

type PostsLikedPost = {
  id: number;
  post: PostsType;
};

export type PresenterType = {
  myUser: MyUserType;
  myPost: PostsType[];
  likedPost: PostsLikedPost[];
};
