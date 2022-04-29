import React, { FC } from "react";
import { notify } from "../../util/notify";
import RelationshipApi from "../../api/Relationship/api";
import { useParams } from "react-router-dom";
import Presenter from "./presenter";
import useFetchMyPost from "../../hooks/useFetchMyPost";
import useFetchLikedMyPost from "../../hooks/useFetchLikedMyPost";
import useFetchMyUser from "../../hooks/useFetchMyUser";
import useFetchUser from "../../hooks/useFetchUser";
import useFetchFollow from "../../hooks/useFetchFollow";

const UserPage: FC = () => {
  const params = useParams();
  const myPost = useFetchMyPost(Number(params.id));
  const likedPost = useFetchLikedMyPost(Number(params.id));
  const { myUser } = useFetchMyUser();
  const { user } = useFetchUser(Number(params.id));
  const { follow, fetchFollow } = useFetchFollow();

  console.log("follow", follow);

  const handleFollow = async () => {
    const data = {
      follow_id: myUser && myUser.data.id,
      follower_id: Number(params.id),
    };
    await RelationshipApi.create(myUser && myUser.data.id, data);
    notify("正常にフォローが完了しました。");
    fetchFollow();
  };

  const handleUnfollow = async () => {
    await RelationshipApi.remove(follow.data.relationship[0].id);
    notify("正常にフォロー削除完了しました。");
    fetchFollow();
  };

  return (
    <Presenter
      user={user}
      follow={follow}
      myUser={myUser}
      myPost={myPost}
      likedPost={likedPost}
      params={params}
      handleUnfollow={handleUnfollow}
      handleFollow={handleFollow}
    />
  );
};

export default UserPage;
