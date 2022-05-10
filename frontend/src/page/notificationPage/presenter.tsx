import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { formatDate } from '../../util/data';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({
  notification,
  handleNotificationCheck,
}) => {
  return (
    <>
      <Text mb={2} fontWeight={700} fontSize="15px">
        通知
      </Text>
      {notification &&
        notification.map((val) => {
          return (
            <Box py={2} onClick={() => handleNotificationCheck(val)}>
              <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
              <Text fontSize="14px">
                {val.visiter.name}さんから
                {val.type === 'like' && 'いいね'}
                {val.type === 'reply' && '返信'}
                {val.type === 'follow' && 'フォロー'}が来ました。
                {val.checked === true && '既読済み'}
              </Text>
            </Box>
          );
        })}
    </>
  );
};

export default Presenter;
