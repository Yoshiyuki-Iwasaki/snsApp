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
  favorite: {
    favoriteNumberData: {
      length: number;
    };
    favoriteData: {
      length: number;
    };
  };
  deletePost: deletePostType;
  handleInputChange: handleInputChangeType;
  addReply: any;
  handleLike: any;
  handleUnlike: any;
};
