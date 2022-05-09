import { MyUserType } from '../../type/MyUser';
import { PostsType } from '../../type/Posts';
import { handleInputChangeType } from '../../type';
import { updatePostType } from '../../type';

export type PresenterType = {
  myUser: MyUserType;
  currentPost: PostsType;
  handleInputChange: handleInputChangeType;
  updatePost: updatePostType;
};
