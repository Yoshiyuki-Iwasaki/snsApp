import { notify } from '../util/notify';
import RelationshipApi from '../api/Relationship/api';
import NotificationApi from '../api/Notification/api';

// Followを取得するcustom hooks.
const useHandleFollow = (myUser, params, fetchFollow) => {
  const handleFollow = async () => {
    const data = {
      follow_id: myUser && myUser.data.id,
      follower_id: Number(params.id),
    };
    const notificationData = {
      visiter_id: myUser && myUser.data.id,
      visited_id: Number(params.id),
      type: 'follow',
      checked: false,
    };
    try {
      await NotificationApi.create(notificationData);
      await RelationshipApi.create(myUser && myUser.data.id, data);
      notify('正常にフォローが完了しました。');
      fetchFollow();
    } catch (e) {
      console.log(e);
    }
  };

  return handleFollow;
};

export default useHandleFollow;
