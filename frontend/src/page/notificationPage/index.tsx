import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useFetchNotification from '../../hooks/useFetchNotification';

const NotificationPage: FC = () => {
  const { notification } = useFetchNotification();
  return <Presenter notification={notification} />;
};

export default NotificationPage;
