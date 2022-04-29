import { notify } from "../util/notify";
import RelationshipApi from "../api/Relationship/api";

const useHandleFollow = (follow, fetchFollow) => {
  const handleUnfollow = async () => {
    await RelationshipApi.remove(follow.data.relationship[0].id);
    notify("正常にフォロー削除完了しました。");
    fetchFollow();
  };

  return handleUnfollow;
};

export default useHandleFollow;
