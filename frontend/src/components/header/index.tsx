import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useHandleLogout from '../../hooks/useHandleLogout';
import useHandleSearch from '../../hooks/useHandleSearch';

const Header: FC = () => {
  const { inputChange, handleInputChange } = useHandleInputChange('');
  const { myUser } = useHandleLogout();
  const handleSearch = useHandleSearch(inputChange);

  return (
    <Presenter
      myUser={myUser}
      search={inputChange}
      handleInputChange={handleInputChange}
      handleSearch={handleSearch}
    />
  );
};

export default Header;
