import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useHandleLogout from '../../hooks/useHandleLogout';

const SettingPage: FC = () => {
  const { handleLogout } = useHandleLogout();

  return <Presenter handleLogout={handleLogout} />;
};

export default SettingPage;
