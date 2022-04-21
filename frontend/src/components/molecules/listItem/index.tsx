import React, { useEffect, useState, FC } from "react";
import Presenter from "./presenter";
import FavoriteApi from "../../../api/Favorite/api";
import { ListItemType } from "./type";
import { notify } from "../../../util/notify";

const ListItem: FC<ListItemType> = ({ key, index, myuser, user, val }) => {
  const [favorite, setFavorite] = useState<any>();

  const fetchFavorite = async () => {
    const FavoriteRes = await FavoriteApi.fetch(myuser.id, val.id);
    setFavorite(FavoriteRes);
  };

  const handleLike = async () => {
    const data = {
      todo_id: val.id,
      user_id: myuser.id,
    };
    await FavoriteApi.create(myuser.id, val.id, data);
    notify("正常にいいねが完了しました。");
    fetchFavorite();
  };

  const handleUnlike = async () => {
    await FavoriteApi.remove(favorite.data.favorite[0].id);
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
      user={user}
      favorite={favorite}
      handleLike={handleLike}
      handleUnlike={handleUnlike}
    />
  );
};

export default ListItem;
