import React, { FC } from 'react';
import { Box, Button, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ListMenuType } from './type';

const Presenter: FC<ListMenuType> = ({
  myUser,
  postedUser,
  modalOpen,
  val,
  handleModal,
  deleteTodo,
}) => {
  return (
    <>
      {myUser && myUser.data.id === postedUser.id && (
        <Button
          m={0}
          p={0}
          w={30}
          h={30}
          minWidth={0}
          minHeight={0}
          lineHeight={1}
          position="absolute"
          top={2}
          right={3}
          onClick={handleModal}
        >
          <HamburgerIcon />
        </Button>
      )}
      {modalOpen && (
        <Box position="absolute" top={2} right={16}>
          <Box>
            <Link href={'/todo/' + val.id + '/edit'} fontSize="13px">
              編集
            </Link>
          </Box>
          <Box>
            <Button
              m={0}
              p={0}
              minWidth={0}
              height="auto"
              width="auto"
              bgColor="#fff"
              fontSize="13px"
              fontWeight={400}
              onClick={deleteTodo}
            >
              削除
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Presenter;
