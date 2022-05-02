type handleLikeType = () => {};
type handleUnlikeType = () => {};

export type ListItemType = {
  user: {
    id: number;
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
  myUser: {
    data: {
      id: number;
    };
  };
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  favorite: {
    data: {
      favorite: {
        length: number;
      };
      isFavorite: {
        length: number;
      };
    };
  };
  modalOpen: boolean;
  detailPageFrag: boolean;
  handleLike: handleLikeType;
  handleUnlike: handleUnlikeType;
  handleModal: any;
  deleteTodo;
};
