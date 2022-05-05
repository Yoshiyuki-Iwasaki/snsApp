import { deleteTodoType } from '../../type';
import { handleModalType } from '../../type';
import { handleLikeType } from '../../type';
import { handleUnlikeType } from '../../type';
import { MyUserType } from '../../type/MyUser';
import { TodosType } from '../../type/Todos';
import { PostedUser } from '../../type/User';

export type ListItemType = {
  postedUser: PostedUser;
  myUser: MyUserType;
  val: TodosType;
  replyFrag?: boolean;
};

export type PresenterType = {
  val: TodosType;
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
