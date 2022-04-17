import React, { FC, useEffect, useState } from "react";
import { notify } from "../../util/notify";
import Button from "../../components/atoms/button";
import UserApi from "../../api/User/api";
import { useParams } from "react-router-dom";

const UserPage: FC<any> = ({ myUser }) => {
  const params = useParams();
  const [follow, setFollow] = useState(false);
  const [user, setUser] = useState<any>();

  const fetchFollow = async () => {
    const userRes = await UserApi.show(params.id);
    setUser(userRes.data);
  };

  const handleFollow = async () => {
    // const data = {
    //   todo_id: val.id,
    //   user_id: user.id,
    // };
    // await Favorite.create(user.id, val.id, data);
    notify("正常にフォローが完了しました。");
    setFollow(!follow);
    fetchFollow();
  };

  const handleUnfollow = async () => {
    // await Favorite.remove(favorite.data[0].id);
    notify("正常にフォロー削除完了しました。");
    setFollow(!follow);
    fetchFollow();
  };

  useEffect(() => {
    fetchFollow();
  }, []);

  return (
    <>
      <p>{user && user.name}</p>
      {/* マイページ以外のユーザーページにフォローボタンを表示させる */}
      {myUser && myUser.id !== parseInt(params.id) ? (
        <>
          {follow ? (
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
