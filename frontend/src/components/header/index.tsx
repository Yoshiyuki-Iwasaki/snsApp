import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleLogout from '../../hooks/useHandleLogout';

const Header: FC = () => {
  const { myUser, handleLogout } = useHandleLogout();

  return <Presenter myUser={myUser} handleLogout={handleLogout} />;
};

export default Header;
