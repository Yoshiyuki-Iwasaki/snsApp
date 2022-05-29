import React, { FC } from 'react';
import { Box, Button, Link } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({
  myUser,
  postedUser,
  modalOpenFrag,
  replyFrag,
  val,
  handleModal,
  deletePost,
}) => {
  return (
    <>
      {postedUser && myUser && (
        <>
          {myUser.data.id === postedUser.id && (
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
          {modalOpenFrag && (
            <Box position="absolute" top={2} right={16}>
              {!replyFrag && (
                <Box>
                  <Link
                    href={'/post/' + val.id + '/edit'}
                    fontSize="13px"
                    _hover={{ textDecoration: 'none' }}
                  >
                    編集
                  </Link>
                </Box>
              )}
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
                  onClick={deletePost}
                >
                  削除
                </Button>
              </Box>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Presenter;
