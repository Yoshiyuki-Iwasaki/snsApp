import React, { FC } from 'react';
import { Box, Link, Button } from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({ myUser, handleLogout }) => {
  return (
    <>
      <Box>
        <Box>
          {myUser && (
            <Link href={'/user/' + myUser.data.id + '/edit/'}>
              プロフィール編集
            </Link>
          )}
        </Box>
        <Box>
          <Button onClick={handleLogout}>ログアウト</Button>
        </Box>
      </Box>
    </>
  );
};

export default Presenter;
