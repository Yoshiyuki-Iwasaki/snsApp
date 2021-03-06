import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import { useHandleSearch } from './hooks';

const SearchArea: FC = () => {
  const { inputChange, handleInputChange } = useHandleInputChange('');
  const { handleSearch } = useHandleSearch(inputChange);

  return (
    <Presenter
      search={inputChange}
      handleInputChange={handleInputChange}
      handleSearch={(e: any) => handleSearch(e)}
    />
  );
};

export default SearchArea;
