import React, { FC, useEffect, useState } from "react";
import { notify } from "../../util/notify";
import UserApi from "../../api/User/api";
import RelationshipApi from "../../api/Relationship/api";
import TodoApi from "../../api/Todo/api";
import FavoriteApi from "../../api/Favorite/api";
import { useParams } from "react-router-dom";
import Presenter from "./presenter";
import { UserPageType } from "./type";

const UserPage: FC<UserPageType> = ({ myUser }) => {
  const params = useParams();
  const [follow, setFollow] = useState<any>();
  const [user, setUser] = useState<any>();
  const [myPost, setMyPost] = useState<any>();
  const [likedPost, setLikedPost] = useState<any>();

  const fetchFollow = async () => {
    const userRes = await UserApi.show(params.id);
    setUser(userRes.data);

    const myuserId = localStorage.getItem("userId");
    const myuserRes = await UserApi.show(myuserId);

    const followRes = await RelationshipApi.fetch(
      userRes.data.id,
      myuserRes.data.id
    );
    setFollow(followRes);
  };

  const fetchMyPost = async () => {
    const TodoRes = await TodoApi.fetch_userTodo(Number(params.id));
    setMyPost(TodoRes);
  };

  const fetchLikedPost = async () => {
    const FavoriteRes = await FavoriteApi.fetch_userTodo(Number(params.id));
    setLikedPost(FavoriteRes);
  };

  useEffect(() => {
    fetchFollow();
    fetchMyPost();
    fetchLikedPost();
  }, []);

  const handleFollow = async () => {
    const data = {
      follow_id: user.id,
      follower_id: myUser.id,
    };
    await RelationshipApi.create(user.id, data);
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
