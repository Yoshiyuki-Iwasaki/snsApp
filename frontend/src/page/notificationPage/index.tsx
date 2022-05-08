import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useFetchNotification from '../../hooks/useFetchNotification';
import { useNavigate } from 'react-router-dom';
import NotificationApi from '../../api/Notification/api';

const NotificationPage: FC = () => {
  const { notification } = useFetchNotification();
  const navigate = useNavigate();

  const handleNotificationCheck = async (val) => {
    const data = {
      checked: true,
    };
    await NotificationApi.update(val.id, data);
    if (val.type === 'like' || val.type === 'reply') {
      navigate('/todo/' + val.todo.id);
    } else if (val.type === 'follow') {
      navigate('/user/' + val.visiter.id);
    }
  };

  return (
    <Presenter
      notification={notification}
      handleNotificationCheck={handleNotificationCheck}
    />
  );
};

export default NotificationPage;
