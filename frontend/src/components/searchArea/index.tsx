import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useHandleSearch from '../../hooks/useHandleSearch';

const SearchArea: FC = () => {
  const { inputChange, handleInputChange } = useHandleInputChange('');
  const handleSearch = useHandleSearch(inputChange);

  return (
    <Presenter
      search={inputChange}
      handleInputChange={handleInputChange}
      handleSearch={handleSearch}
    />
  );
};

export default SearchArea;
