type handleLikeType = () => {};
type handleUnlikeType = () => {};

export type ListItemType = {
  user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  myUser: any;
  val: {
    id: number;
    createdAt: string;
    name: string;
  };
  detailPageFrag?: boolean;
};

export type PresenterType = {
  val: {
    id: number;
    createdAt: string;
    name: string;
  };
  user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  favorite: any;
  handleLike: handleLikeType;
  handleUnlike: handleUnlikeType;
};
