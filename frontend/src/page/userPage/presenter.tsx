import React, { FC } from "react";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import { PresenterType } from "./type";

const Presenter: FC<PresenterType> = ({
  user,
  follow,
  myUser,
  params,
  handleUnfollow,
  handleFollow,
}) => {
  return (
    <>
      <Label>ユーザー名</Label>
      <Label>{user && user.name}</Label>
      <Label>フォロー数</Label>
      <Label>{follow && follow.data.isRelationshipFollowing.length}</Label>
      <Label>フォロワー数</Label>
      <Label>{follow && follow.data.isRelationshipFollowed.length}</Label>
      {/* マイページ以外のユーザーページにフォローボタンを表示させる */}
      {myUser && myUser.id !== parseInt(params.id) ? (
        <>
          {follow && follow.data.relationship.length ? (
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

export default Presenter;
