import React, { FC } from 'react';
import { Box, Link, Button } from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({ handleLogout }) => {
  return (
    <>
      <Box>
        <Box>
          <Link>プロフィール編集</Link>
        </Box>
        <Box>
          <Button onClick={handleLogout}>ログアウト</Button>
        </Box>
      </Box>
    </>
  );
};

export default Presenter;
