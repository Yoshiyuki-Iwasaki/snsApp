import { PostsType } from '../../type/Posts';
import { MyUserType } from '../../type/MyUser';
import { handleUnfollowType } from '../../type';
import { handleFollowType } from '../../type';

type PostsLikedPost = {
  id: number;
  post: PostsType;
};

export type PresenterType = {
  chatRoom: any;
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
  myUser: MyUserType;
  myPost: PostsType[];
  likedPost: PostsLikedPost[];
  params: {
    id: string;
  };
  handleUnfollow: handleUnfollowType;
  handleFollow: handleFollowType;
};
