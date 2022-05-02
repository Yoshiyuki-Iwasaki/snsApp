import React, { FC } from 'react';
import { formatDate } from '../../util/data';
import { PresenterType } from './type';
import { Box, Input, Text, Button } from '@chakra-ui/react';

const Presenter: FC<PresenterType> = ({
  myUser,
  currentTodo,
  handleInputChange,
  updateTodo,
}) => {
  return (
    <>
      {/* 自分の投稿のみ編集、削除できるようにする。 */}
      {myUser && myUser.data.id === currentTodo.user.id && (
        <>
          <Box p="5" w="500px" borderWidth="1px">
            <Text fontSize={13}>{formatDate(currentTodo.createdAt)}</Text>
            <Input
              mt={2}
              type="text"
              name="name"
              value={currentTodo.name}
              onChange={handleInputChange}
            />
            <Button mt={2} onClick={updateTodo}>
              Update
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default Presenter;
