import React, { FC } from 'react';
import Presenter from './presenter';
import { ListItemType } from './type';
import { useFetchFavorite } from './hooks';
import { useHandleLike } from './hooks';
import { useHandleUnlike } from './hooks';

const Like: FC<ListItemType> = ({ myUser, val, replyFrag }) => {
  // いいね取得機能
  const { favorite, fetchFavorite } = useFetchFavorite(val, replyFrag);
  // いいね機能
  const handleLike = useHandleLike(val, myUser, fetchFavorite, replyFrag);
  // いいね削除機能
  const handleUnlike = useHandleUnlike(favorite, fetchFavorite);

  return (
    <Presenter
      favorite={favorite}
      handleLike={handleLike}
      handleUnlike={handleUnlike}
    />
  );
};

export default Like;
