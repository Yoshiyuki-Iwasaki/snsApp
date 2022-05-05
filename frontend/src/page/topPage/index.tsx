import React, { FC } from 'react';
import Presenter from './presenter';
import useFetchAllTodos from '../../hooks/useFetchAllTodos';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const TopPage: FC = () => {
  const { myUser } = useFetchMyUser();
  const { todos, fetchTodo, hasMore, isFetching } = useFetchAllTodos();

  return (
    <Presenter
      todos={todos}
      myUser={myUser}
      hasMore={hasMore}
      isFetching={isFetching}
      fetchTodo={fetchTodo}
    />
  );
};

export default TopPage;
