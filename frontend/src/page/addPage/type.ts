import { handleInputChangeType } from '../../type';
import { addPostType } from '../../type';

export type PresenterType = {
  post: {
    name: any;
  };
  addPost: addPostType;
  handleInputChange: handleInputChangeType;
};
