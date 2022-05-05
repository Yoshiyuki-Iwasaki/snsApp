import { deleteTodoType } from '../../type';
import { handleModalType } from '../../type';
import { handleLikeType } from '../../type';
import { handleUnlikeType } from '../../type';
import { MyUserType } from '../../type/MyUser';
import { Todos } from '../../type/Todos';
import { PostedUser } from '../../type/User';

export type ListItemType = {
  postedUser: PostedUser;
  myUser: MyUserType;
  val: Todos;
  replyFrag?: boolean;
};

export type PresenterType = {
  val: Todos;
  myUser: MyUserType;
  postedUser: PostedUser;
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
