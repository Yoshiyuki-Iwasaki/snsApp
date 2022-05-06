import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useHandleLogout from '../../hooks/useHandleLogout';
import { useParams } from 'react-router-dom';

const SettingPage: FC = () => {
  const { id } = useParams();
  const { handleLogout } = useHandleLogout();

  return <Presenter params={{ id }} handleLogout={handleLogout} />;
};

export default SettingPage;
