import React, { FC } from 'react';
import ListItem from '../../components/listItem';
import { PresenterType } from './type';
import InfiniteScroll from 'react-infinite-scroller';
import { Box } from '@chakra-ui/react';
import Loading from '../../components/loading';
import InputField from '../../components/inputField';

const Presenter: FC<PresenterType> = ({
  myUser,
  posts,
  hasMore,
  isFetching,
  fetchPost,
}) => {
  return (
    <>
      <InputField />
      <Box my={5} height="calc(100vh - (162px + 2.5rem))" overflow="scroll">
        <InfiniteScroll
          pageStart={0}
          loadMore={!isFetching && fetchPost} //項目を読み込む際に処理するコールバック関数
          initialLoad={true}
          hasMore={hasMore} //読み込みを行うかどうかの判定
          loader={Loading}
          useWindow={false}
        >
          {/* 読み込み最中に表示する項目 */}
          {posts.map((val) => {
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
    </>
  );
};

export default Presenter;
