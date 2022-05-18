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
  deletePost: deletePostType;
  handleModal: handleModalType;
  handleInputChange: handleInputChangeType;
  addReply: addReplyType;
};

export type PresenterType = {
  myUser: any;
  chats: any;
  inputChange: any;
  addChat: any;
  handleInputChange: any;
};
