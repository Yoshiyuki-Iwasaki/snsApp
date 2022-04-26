import React, { useState, useEffect, FC } from "react";
import Presenter from "./presenter";
import FavoriteApi from "../../../api/Favorite/api";
import { ListItemType } from "./type";
import { notify } from "../../../util/notify";
import useFetchFavorite from "../../../hooks/useFetchFavorite";
import useFetchUser from "../../../hooks/useFetchUser";

const ListItem: FC<ListItemType> = ({ myUser, user, val }) => {
  const { favorite, fetchFavorite } = useFetchFavorite(val);

  const handleLike = async () => {
    const data = {
      todo_id: val.id,
      user_id: myUser.data.id,
    };
    await FavoriteApi.create(data);
    notify("正常にいいねが完了しました。");
    fetchFavorite();
  };

  const handleUnlike = async () => {
    await FavoriteApi.remove(favorite.data.favorite[0].id);
    notify("正常にいいね削除完了しました。");
    fetchFavorite();
  };

  return (
    <Presenter
      val={val}
      user={user}
      favorite={favorite}
      handleLike={handleLike}
      handleUnlike={handleUnlike}
    />
  );
};

export default ListItem;
