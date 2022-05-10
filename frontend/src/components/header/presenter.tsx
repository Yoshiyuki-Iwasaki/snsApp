import { Flex, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PresenterType } from './type';
import { SettingsIcon, PlusSquareIcon, BellIcon } from '@chakra-ui/icons';

const Presenter: FC<PresenterType> = ({ myUser }) => {
  return (
    <Flex py={3} alignItems={'center'} justifyContent={'space-between'}>
      <Link href="/" _hover={{ textDecoration: 'none' }}>
        <Text fontSize={22} fontWeight={700}>
          SNS APP
        </Text>
      </Link>
      <Flex alignItems={'center'}>
        {myUser && myUser.isLogin ? (
          <>
            <Link mr={5} href={`/new`} fontSize={14} fontWeight={700}>
              <PlusSquareIcon />
            </Link>
            <Link mr={5} href={`/notification`} fontSize={14} fontWeight={700}>
              <BellIcon />
            </Link>
            <Link mr={5} href={`/setting`} fontSize={14} fontWeight={700}>
              <SettingsIcon />
            </Link>
            <Link
              mr={5}
              href={`/user/${myUser.data.id}`}
              fontSize={14}
              fontWeight={700}
            >
              {myUser.data.name}
            </Link>
          </>
        ) : (
          <>
            <Link mr={5} href="/" fontSize={14}>
              ログイン
            </Link>
            <Link href="/signup" fontSize={14}>
              新規登録
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Presenter;
