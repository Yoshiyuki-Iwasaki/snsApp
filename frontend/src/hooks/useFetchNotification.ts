import { useEffect, useState } from 'react';
import NotificationApi from '../api/Notification/api';
import useFetchMyUser from '../hooks/useFetchMyUser';

// Notificationを取得するcustom hooks.
const useFetchNotification = () => {
  const [notification, setNotification] = useState();
  const { myUser } = useFetchMyUser();

  console.log('myUser', myUser);
  console.log('notification', notification);

  const fetchNotification = async () => {
    try {
      const notificationRes = await NotificationApi.fetch(myUser.data.id);
      setNotification(notificationRes.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    myUser && fetchNotification();
  }, [myUser]);

  return { notification, setNotification, fetchNotification };
};

export default useFetchNotification;
