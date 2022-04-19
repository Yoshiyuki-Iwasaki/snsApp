import React, { useEffect, useState, FC } from "react";
import Presenter from "./presenter";
import FavoriteApi from "../../../api/Favorite/api";
import { ListItemType } from "./type";
import { notify } from "../../../util/notify";

const ListItem: FC<ListItemType> = ({
  key,
  index,
  user,
  val,
  updateIsCompleted,
}) => {
  const [favorite, setFavorite] = useState<any>();

  const fetchFavorite = async () => {
    const todoRes = await FavoriteApi.fetch(user.id, val.id);
    setFavorite(todoRes);
  };

  const handleLike = async () => {
    const data = {
      todo_id: val.id,
      user_id: user.id,
    };
    await FavoriteApi.create(user.id, val.id, data);
    notify("正常にいいねが完了しました。");
    fetchFavorite();
  };

  const handleUnlike = async () => {
    await FavoriteApi.remove(favorite.data[0].id);
    notify("正常にいいね削除完了しました。");
    fetchFavorite();
  };

  useEffect(() => {
    fetchFavorite();
  }, []);

  return (
    <Presenter
      key={key}
      index={index}
      val={val}
      updateIsCompleted={updateIsCompleted}
      favorite={favorite}
      handleLike={handleLike}
      handleUnlike={handleUnlike}
    />
  );
};

export default ListItem;
