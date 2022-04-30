import React, { FC } from "react";
import Presenter from "./presenter";
import { ListItemType } from "./type";
import useFetchFavorite from "../../../hooks/useFetchFavorite";
import useHandleLike from "../../../hooks/useHandleLike";
import useHandleUnlike from "../../../hooks/useHandleUnlike";

const ListItem: FC<ListItemType> = ({ myUser, user, val, detailPageFrag }) => {
  const { favorite, fetchFavorite } = useFetchFavorite(val, detailPageFrag);
  const handleLike = useHandleLike(val, myUser, fetchFavorite, detailPageFrag);
  const handleUnlike = useHandleUnlike(favorite, fetchFavorite);

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
