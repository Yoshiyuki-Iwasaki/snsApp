import { deleteTodoType } from '../../type';
import { handleModalType } from '../../type';
import { handleLikeType } from '../../type';
import { handleUnlikeType } from '../../type';

export type ListItemType = {
  postedUser: {
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  myUser: {
    data: {
      id: number;
    };
  };
  val: {
    id: number;
    createdAt: string;
    name: string;
  };
  replyFrag?: boolean;
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
  postedUser: {
    id: number;
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  favorite: {
    favorite: {
      length: number;
    };
    isFavorite: {
      length: number;
    };
  };
  replyFrag: boolean;
  modalOpenFrag: boolean;
  handleLike: handleLikeType;
  handleUnlike: handleUnlikeType;
  handleModal: handleModalType;
  deleteTodo: deleteTodoType;
};
