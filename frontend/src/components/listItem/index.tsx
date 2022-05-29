import React, { FC } from 'react';
import Presenter from './presenter';
import { ListItemType } from './type';
import useDeletePost from '../../hooks/useDeletePost';

const ListItem: FC<ListItemType> = ({ myUser, postedUser, val, replyFrag }) => {
  const deletePost = useDeletePost(val, replyFrag);

  return (
    <Presenter
      val={val}
      myUser={myUser}
      postedUser={postedUser}
      replyFrag={replyFrag}
      deletePost={deletePost}
    />
  );
};

export default ListItem;
