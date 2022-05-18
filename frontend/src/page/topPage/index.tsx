import React, { FC } from 'react';
import Presenter from './presenter';
import { useFetchAllPosts } from './hooks';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const TopPage: FC = () => {
  const { myUser } = useFetchMyUser();
  const { posts, fetchPost, hasMore, isFetching } = useFetchAllPosts();

  return (
    <Presenter
      posts={posts}
      myUser={myUser}
      hasMore={hasMore}
      isFetching={isFetching}
      fetchPost={fetchPost}
    />
  );
};

export default TopPage;
