import { TodosType } from '../../type/Todos';
import { MyUserType } from '../../type/MyUser';
import { handleUnfollowType } from '../../type';
import { handleFollowType } from '../../type';

type TodosLikedPost = {
  id: number;
  todo: TodosType;
};

export type PresenterType = {
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
  myPost: TodosType[];
  likedPost: TodosLikedPost[];
  params: {
    id: string;
  };
  handleUnfollow: handleUnfollowType;
  handleFollow: handleFollowType;
};
