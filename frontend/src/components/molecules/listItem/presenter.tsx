import React, { FC } from "react";
import { Main } from "./style";
import { formatDate } from "../../../util/data";
import { Link } from "react-router-dom";
import Label from "../../atoms/label";
import { PresenterType } from "./type";
import Button from "../../atoms/button";

const Presenter: FC<PresenterType> = ({
  val,
  user,
  favorite,
  handleLike,
  handleUnlike,
}) => {
  return (
    <Main>
      <Link to={"/" + val.id}>
        <Label>{formatDate(val.createdAt)}</Label>
        <Label>{val.name}</Label>
        <Label>投稿者: {user.name}</Label>
      </Link>
      {favorite && favorite.data.favorite.length ? (
        <Button onClick={handleUnlike}>いいね削除</Button>
      ) : (
        <Button onClick={handleLike}>いいね</Button>
      )}
      <Label>{favorite && favorite.data.isFavorite.length}</Label>
    </Main>
  );
};

export default Presenter;
