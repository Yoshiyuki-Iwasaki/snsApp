import { Todos } from '../../type/Todos';

type handleUnfollowType = () => {};
type handleFollowType = () => {};

type TodosLikedPost = {
  id: number;
  todo: {
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
};

export type PresenterType = {
  user: {
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
  myUser: {
    data: {
      id: number;
    };
  };
  myPost: Todos[];
  likedPost: TodosLikedPost[];
  params: {
    id: string;
  };
  handleUnfollow: handleUnfollowType;
  handleFollow: handleFollowType;
};
