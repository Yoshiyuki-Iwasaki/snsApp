import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import { FiSend } from 'react-icons/fi';
import ListItem from '../../components/listItem';
import {
  Box,
  Flex,
  Input,
  Text,
  Button,
  FormControl,
  Center,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Presenter: FC<any> = ({ id, myUser, posts }) => {
  return (
    <>
      <Box height="calc(100vh - 135px)" overflow="scroll">
        <Text>SearchPage</Text>
        <Text>検索結果: {id}</Text>
        {posts &&
          posts.map((val) => {
            return (
              <ListItem
                key={val.id}
                myUser={myUser}
                postedUser={val.user}
                val={val}
              />
            );
          })}
      </Box>
    </>
  );
};

export default Presenter;
