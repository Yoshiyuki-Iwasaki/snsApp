import { notify } from '../util/notify';
import RelationshipApi from '../api/Relationship/api';

// Followを取得するcustom hooks.
const useHandleFollow = (myUser, params, fetchFollow) => {
  const handleFollow = async () => {
    const data = {
      follow_id: myUser && myUser.data.id,
      follower_id: Number(params.id),
    };
    await RelationshipApi.create(myUser && myUser.data.id, data);
    notify('正常にフォローが完了しました。');
    fetchFollow();
  };

  return handleFollow;
};

export default useHandleFollow;
