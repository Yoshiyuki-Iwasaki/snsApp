import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useHandleLogout from '../../hooks/useHandleLogout';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const SettingPage: FC = () => {
  const { handleLogout } = useHandleLogout();
  const { myUser } = useFetchMyUser();

  return <Presenter myUser={myUser} handleLogout={handleLogout} />;
};

export default SettingPage;
