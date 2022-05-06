import React, { FC } from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { formatDate } from '../../util/data';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({ notification }) => {
  return (
    <>
      {notification &&
        notification.map((val) => {
          return (
            <>
              <Box py={2}>
                {val.type === 'like' && (
                  <Link href={'/todo/' + val.todo.id}>
                    <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
                    {val.visiter.name}さんからいいねが来ました。
                  </Link>
                )}
                {val.type === 'reply' && (
                  <Link href={'/todo/' + val.todo.id}>
                    <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
                    {val.visiter.name}さんから返信が来ました。
                  </Link>
                )}
                {val.type === 'follow' && (
                  <Link href={'/user/' + val.visiter.id}>
                    <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
                    {val.visiter.name}さんからフォローが来ました。
                  </Link>
                )}
              </Box>
            </>
          );
        })}
    </>
  );
};

export default Presenter;
