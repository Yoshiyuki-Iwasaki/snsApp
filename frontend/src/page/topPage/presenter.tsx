import React, { FC } from 'react';
import ListItem from '../../components/listItem';
import { PresenterType } from './type';
import InfiniteScroll from 'react-infinite-scroller';
import { Box } from '@chakra-ui/react';

const Presenter: FC<PresenterType> = ({
  myUser,
  todos,
  hasMore,
  isFetching,
  fetchTodo,
}) => {
  //ロード中に表示する項目
  const loader = (
    <div className="loader" key={0}>
      Loading ...
    </div>
  );

  return (
    <Box mt={2} p="5">
      <Box>
        <InfiniteScroll
          pageStart={0}
          loadMore={!isFetching && fetchTodo} //項目を読み込む際に処理するコールバック関数
          initialLoad={true}
          hasMore={hasMore} //読み込みを行うかどうかの判定
          loader={loader}
          useWindow={false}
        >
          {/* 読み込み最中に表示する項目 */}
          {todos.map((val) => {
            return (
              <ListItem
                key={val.id}
                myUser={myUser}
                postedUser={val.user}
                val={val}
              />
            );
          })}
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

export default Presenter;
