type handleUnfollowType = () => {};
type handleFollowType = () => {};

export type UserPageType = {
  myUser: any;
};
export type PresenterType = {
  user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  follow: {
    data: {
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
  };
  myUser: any;
  myPost: any;
  likedPost: any;
  params: any;
  handleUnfollow: handleUnfollowType;
  handleFollow: handleFollowType;
};
