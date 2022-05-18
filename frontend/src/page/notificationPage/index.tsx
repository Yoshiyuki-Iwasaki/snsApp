import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import { useFetchNotification } from './hooks';
import { useHandleNotificationCheck } from './hooks';

const NotificationPage: FC = () => {
  const { notification } = useFetchNotification();
  const handleNotificationCheck = useHandleNotificationCheck();

  return (
    <Presenter
      notification={notification}
      handleNotificationCheck={handleNotificationCheck}
    />
  );
};

export default NotificationPage;
