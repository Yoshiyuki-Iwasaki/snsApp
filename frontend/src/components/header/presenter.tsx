import { Flex, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PresenterType } from './type';
import { SettingsIcon, PlusSquareIcon, BellIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import SearchArea from '../searchArea';

const Presenter: FC<PresenterType> = ({ myUser }) => {
  return (
    <Flex py={3} alignItems={'center'} justifyContent={'space-between'}>
      <Link href="/" _hover={{ textDecoration: 'none' }}>
        <motion.button whileHover={{ opacity: 0.7 }}>
          <Text fontSize={22} fontWeight={700}>
            SNS APP
          </Text>
        </motion.button>
      </Link>
      <Flex alignItems={'center'}>
        {myUser && myUser.isLogin ? (
          <>
            <SearchArea />
            <Link
              mr={5}
              href={`/new`}
              fontSize={14}
              fontWeight={700}
              _hover={{ textDecoration: 'none' }}
            >
              <motion.button whileHover={{ scale: 1.3 }}>
                <PlusSquareIcon />
              </motion.button>
            </Link>
            <Link
              mr={5}
              href={`/notification`}
              fontSize={14}
              fontWeight={700}
              _hover={{ textDecoration: 'none' }}
            >
              <motion.button whileHover={{ scale: 1.3 }}>
                <BellIcon />
              </motion.button>
            </Link>
            <Link
              mr={5}
              href={`/setting`}
              fontSize={14}
              fontWeight={700}
              _hover={{ textDecoration: 'none' }}
            >
              <motion.button whileHover={{ scale: 1.3 }}>
                <SettingsIcon />
              </motion.button>
            </Link>
            <Link
              mr={5}
              href={`/user/${myUser.data.id}`}
              fontSize={14}
              fontWeight={700}
              _hover={{ textDecoration: 'none' }}
            >
              <motion.button whileHover={{ opacity: 0.7 }}>
                {myUser.data.name}
              </motion.button>
            </Link>
          </>
        ) : (
          <>
            <Link
              mr={5}
              href="/"
              fontSize={14}
              _hover={{ textDecoration: 'none' }}
            >
              ログイン
            </Link>
            <Link
              href="/signup"
              fontSize={14}
              _hover={{ textDecoration: 'none' }}
            >
              新規登録
            </Link>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Presenter;
