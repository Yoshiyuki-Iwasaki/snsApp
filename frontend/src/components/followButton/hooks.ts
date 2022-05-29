import { notify } from '../../util/notify';
import RelationshipApi from '../../api/Relationship/api';
import NotificationApi from '../../api/Notification/api';

// フォロー削除処理をするcustom hooks.
export const useHandleUnFollow = (follow, fetchFollow) => {
  const handleUnfollow = async () => {
    try {
      await RelationshipApi.remove(follow.relationship[0].id);
      notify('正常にフォロー削除完了しました。');
      fetchFollow();
    } catch (e: any) {
      console.log(e);
    }
  };
  return handleUnfollow;
};

// Followを取得するcustom hooks.
export const useHandleFollow = (myUser, params, fetchFollow) => {
  const handleFollow = async () => {
    const data = {
      following_id: myUser && myUser.data.id,
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
