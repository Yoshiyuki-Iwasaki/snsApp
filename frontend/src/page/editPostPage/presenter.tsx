import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import { PresenterType } from './type';
import { Box, Input, Text, Button } from '@chakra-ui/react';

const Presenter: FC<PresenterType> = ({
  myUser,
  currentPost,
  handleInputChange,
  updatePost,
}) => {
  return (
    <>
      <Text mb={2} fontWeight={700} fontSize="15px">
        編集
      </Text>
      {/* 自分の投稿のみ編集、削除できるようにする。 */}
      {myUser && myUser.data.id === currentPost.user.id && (
        <>
          <Box p="5" w="500px" borderWidth="1px">
            <Text fontSize={13}>{formatDate(currentPost.createdAt)}</Text>
            <Input
              mt={2}
              type="text"
              name="name"
              value={currentPost.name}
              onChange={handleInputChange}
            />
            <Button mt={2} onClick={updatePost}>
              更新
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default Presenter;
