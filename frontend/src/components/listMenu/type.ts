import { deletePostType } from '../../type';
import { handleModalType } from '../../type';
import { MyUserType } from '../../type/MyUser';

export type ListMenuType = {
  myUser: MyUserType;
  postedUser: {
    id: number;
    name: string;
  };
  replyFrag?: boolean;
  modalOpenFrag: boolean;
  val: {
    id: number;
    createdAt: string;
    name: string;
  };
  handleModal: handleModalType;
  deletePost: deletePostType;
};
