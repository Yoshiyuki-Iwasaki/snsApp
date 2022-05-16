import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { formatDate } from '../../util/data';
import { PresenterType } from './type';
import { motion } from 'framer-motion';

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
            <Box>
              {val.checked ? (
                <Box p={3} onClick={() => handleNotificationCheck(val)}>
                  <motion.div whileHover={{ opacity: 0.7 }}>
                    <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
                    <Text fontSize="14px">
                      {val.visiter.name}さんから
                      {val.type === 'like' && 'いいね'}
                      {val.type === 'reply' && '返信'}
                      {val.type === 'chat' && 'チャット'}
                      {val.type === 'follow' && 'フォロー'}が来ました。
                    </Text>
                  </motion.div>
                </Box>
              ) : (
                <Box
                  p={3}
                  bgColor="#ffffe0"
                  onClick={() => handleNotificationCheck(val)}
                >
                  <motion.div whileHover={{ opacity: 0.7 }}>
                    <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
                    <Text fontSize="14px">
                      {val.visiter.name}さんから
                      {val.type === 'like' && 'いいね'}
                      {val.type === 'reply' && '返信'}
                      {val.type === 'chat' && 'チャット'}
                      {val.type === 'follow' && 'フォロー'}が来ました。
                    </Text>
                  </motion.div>
                </Box>
              )}
            </Box>
          );
        })}
    </>
  );
};

export default Presenter;
