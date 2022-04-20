import React, { FC, useEffect, useState } from "react";
import { notify } from "../../util/notify";
import Button from "../../components/atoms/button";
import UserApi from "../../api/User/api";
import RelationshipApi from "../../api/Relationship/api";
import { useParams } from "react-router-dom";

const UserPage: FC<any> = ({ myUser }) => {
  const params = useParams();
  const [follow, setFollow] = useState<any>();
  const [user, setUser] = useState<any>();

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

  useEffect(() => {
    fetchFollow();
    console.log(myUser);
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
    await RelationshipApi.remove(follow.data[0].id);
    notify("正常にフォロー削除完了しました。");
    fetchFollow();
  };

  return (
    <>
      <p>{user && user.name}</p>
      {/* マイページ以外のユーザーページにフォローボタンを表示させる */}
      {myUser && myUser.id !== parseInt(params.id) ? (
        <>
          {follow && follow.data.length ? (
            <Button onClick={handleUnfollow}>フォロー削除</Button>
          ) : (
            <Button onClick={handleFollow}>フォロー</Button>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default UserPage;