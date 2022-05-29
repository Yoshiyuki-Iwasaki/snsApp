import { deletePostType } from '../../type';
import { handleModalType } from '../../type';
import { handleLikeType } from '../../type';
import { handleUnlikeType } from '../../type';
import { MyUserType } from '../../type/MyUser';
import { PostsType } from '../../type/Posts';
import { PostedUser } from '../../type/User';

export type ListItemType = {
  myUser: MyUserType;
  val: PostsType;
  replyFrag?: boolean;
};

export type PresenterType = {
  favorite: {
    favoriteData: {
      length: number;
    };
    favoriteNumberData: {
      length: number;
    };
  };
  handleLike: handleLikeType;
  handleUnlike: handleUnlikeType;
};
