import { deletePostType } from '../../type';
import { handleModalType } from '../../type';
import { handleLikeType } from '../../type';
import { handleUnlikeType } from '../../type';
import { MyUserType } from '../../type/MyUser';
import { PostsType } from '../../type/Posts';
import { PostedUser } from '../../type/User';

export type ListItemType = {
  postedUser: PostedUser;
  myUser: MyUserType;
  val: PostsType;
  replyFrag?: boolean;
};

export type PresenterType = {
  val: PostsType;
  myUser: MyUserType;
  postedUser: PostedUser;
  replyFrag: boolean;
  deletePost: deletePostType;
};
