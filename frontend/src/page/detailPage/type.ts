import { PostsType } from '../../type/Posts';
import { MyUserType } from '../../type/MyUser';
import { deletePostType } from '../../type';
import { handleModalType } from '../../type';
import { handleInputChangeType } from '../../type';
import { addReplyType } from '../../type';

export type DetailPageType = {
  currentPost: PostsType;
  myUser: MyUserType;
  reply: {
    content: string;
  };
  replies: PostsType[];
  modalOpenFrag: boolean;
  favorite: {
    favorite: {
      length: number;
    };
    isFavorite: {
      length: number;
    };
  };
  deletePost: deletePostType;
  handleModal: handleModalType;
  handleInputChange: handleInputChangeType;
  addReply: any;
  handleLike: any;
  handleUnlike: any;
};
