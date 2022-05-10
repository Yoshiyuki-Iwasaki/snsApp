import React, { FC } from 'react';
import { Box, Link, Button, Text } from '@chakra-ui/react';
import { PresenterType } from './type';

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
              <Link href={'/user/' + myUser.data.id + '/edit/'}>
                プロフィール編集
              </Link>
            </Box>
            <Box>
              <Link href={'/user/' + myUser.data.id + '/editPassword/'}>
                パスワード変更
              </Link>
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
