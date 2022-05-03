import React, { FC } from 'react';
import Presenter from './presenter';
import useHandleLogout from '../../hooks/useHandleLogout';

const Header: FC = () => {
  const { myUser } = useHandleLogout();

  return <Presenter myUser={myUser} />;
};

export default Header;
