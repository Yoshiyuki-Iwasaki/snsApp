import { useNavigate } from 'react-router-dom';
import NotificationApi from '../api/Notification/api';

// 通知処理をするcustom hooks.
const useHandleNotificationCheck = () => {
  const navigate = useNavigate();

  const handleNotificationCheck = async (val) => {
    const data = {
      checked: true,
    };
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
  };

  return handleNotificationCheck;
};

export default useHandleNotificationCheck;
