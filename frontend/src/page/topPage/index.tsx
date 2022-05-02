import React, { useState, FC } from 'react';
import Presenter from './presenter';
import useFetchAllTodos from '../../hooks/useFetchAllTodos';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const TopPage: FC = () => {
  const [searchName, setSearchName] = useState<string>('');
  const { myUser } = useFetchMyUser();
  const { todos, fetchTodo, hasMore, isFetching } = useFetchAllTodos();

  return (
    <Presenter
      todos={todos}
      user={myUser}
      searchName={searchName}
      setSearchName={setSearchName}
      hasMore={hasMore}
      isFetching={isFetching}
      fetchTodo={fetchTodo}
    />
  );
};

export default TopPage;
