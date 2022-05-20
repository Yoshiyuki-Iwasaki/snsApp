import { handleInputChangeType } from '../../type';
import { addPostType } from '../../type';

export type PresenterType = {
  post: {
    content: string;
  };
  addPost: any;
  handleInputChange: handleInputChangeType;
};
