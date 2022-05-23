import { Box, HStack, Link, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PresenterType } from './type';
import { SettingsIcon, BellIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import SearchArea from '../searchArea';

const Presenter: FC<PresenterType> = ({ myUser }) => {
  return (
    <HStack py={3} justifyContent={'space-between'} spacing="0">
      <Link href="/" _hover={{ textDecoration: 'none' }}>
        <motion.button whileHover={{ opacity: 0.7 }}>
          <Text fontSize={22} fontWeight={700}>
            SNS APP
          </Text>
        </motion.button>
      </Link>
      <HStack spacing="15px">
        {myUser && myUser.isLogin ? (
          <>
            <SearchArea />
            <Link
              ml={5}
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
              ml={10}
              href={`/setting`}
              fontSize={14}
              fontWeight={700}
              _hover={{ textDecoration: 'none' }}
            >
              <motion.button whileHover={{ scale: 1.3 }}>
                <SettingsIcon />
              </motion.button>
            </Link>
            <Box ml={10}>
              <Link
                href={`/user/${myUser.data.id}`}
                fontSize={14}
                fontWeight={700}
                _hover={{ textDecoration: 'none' }}
              >
                <motion.button whileHover={{ opacity: 0.7 }}>
                  {myUser.data.name}
                </motion.button>
              </Link>
            </Box>
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
      </HStack>
    </HStack>
  );
};

export default Presenter;
