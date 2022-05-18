import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NotificationApi from '../../api/Notification/api';
import useFetchMyUser from '../../hooks/useFetchMyUser';

// 通知処理をするcustom hooks.
export const useHandleNotificationCheck = () => {
  const navigate = useNavigate();

  const handleNotificationCheck = async (val) => {
    const data = {
      checked: true,
    };
    try {
      await NotificationApi.update(val.id, data);
      if (val.type === 'like' || val.type === 'reply') {
        // like機能とreply機能の場合
        navigate('/post/' + val.post.id);
      } else if (val.type === 'follow') {
        // follow機能の場合
        navigate('/user/' + val.visiter.id);
      } else if (val.type === 'chat') {
        // chat機能の場合
        navigate('/chatRoom/' + val.url);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return handleNotificationCheck;
};

// Notificationを取得するcustom hooks.
export const useFetchNotification = () => {
  const [notification, setNotification] = useState();
  const { myUser } = useFetchMyUser();

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
