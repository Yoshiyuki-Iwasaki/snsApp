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
  chatRoom: {
    id: number;
    room: RoomsType;
    user: UserType;
  };
  postedUser: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  follow: {
    isRelationshipFollowing: {
      length: number;
    };
    isRelationshipFollowed: {
      length: number;
    };
    relationship: {
      length: number;
    };
  };
  checkedFollow: any;
  myUser: MyUserType;
  myPost: PostsType[];
  likedPost: PostsLikedPost[];
  params: {
    id: string;
  };
  handleUnfollow: handleUnfollowType;
  handleFollow: handleFollowType;
};
