import { handleInputChangeType } from '../../type';
import { handleSearchType } from '../../type';

export type PresenterType = {
  search: {
    content: string;
  };
  handleInputChange: handleInputChangeType;
  handleSearch?: handleSearchType;
};
