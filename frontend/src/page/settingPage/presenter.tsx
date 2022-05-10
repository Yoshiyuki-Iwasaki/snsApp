import React, { FC } from 'react';
import { Box, Link, Button, Text } from '@chakra-ui/react';
import { PresenterType } from './type';
import { motion } from 'framer-motion';

const Presenter: FC<PresenterType> = ({ myUser, handleLogout }) => {
  return (
    <>
      <Box>
        <Text mb={2} fontWeight={700} fontSize="15px">
          設定
        </Text>
        {myUser && (
          <>
            <Box>
              <motion.div whileHover={{ opacity: 0.7 }}>
                <Link
                  href={'/user/' + myUser.data.id + '/edit/'}
                  _hover={{ textDecoration: 'none' }}
                >
                  プロフィール編集
                </Link>
              </motion.div>
            </Box>
            <Box>
              <motion.div whileHover={{ opacity: 0.7 }}>
                <Link
                  href={'/user/' + myUser.data.id + '/editPassword/'}
                  _hover={{ textDecoration: 'none' }}
                >
                  パスワード変更
                </Link>
              </motion.div>
            </Box>
          </>
        )}
        <Box>
          <Button onClick={handleLogout}>ログアウト</Button>
        </Box>
      </Box>
    </>
  );
};

export default Presenter;
