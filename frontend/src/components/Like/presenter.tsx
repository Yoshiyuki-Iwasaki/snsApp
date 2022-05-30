import React, { FC } from 'react';
import { PresenterType } from './type';
import { Box, Text, Button, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const Presenter: FC<PresenterType> = ({
  favorite,
  handleLike,
  handleUnlike,
}) => {
  return (
    <HStack mt={3}>
      {/* いいねしている場合、いいね削除ボタン いいねしていない場合、いいねボタンを表示させる */}
      {favorite && favorite.favoriteData.length ? (
        // いいね削除ボタン
        <Button
          m={0}
          p={0}
          minWidth={0}
          height={30}
          width={30}
          bg="#FF69b4"
          onClick={handleUnlike}
          data-testid="unlikeButton"
        >
          <StarIcon w={3} h={3} color="#fff" />
        </Button>
      ) : (
        // いいねボタン
        <Button
          m={0}
          p={0}
          minWidth={0}
          height={30}
          width={30}
          onClick={handleLike}
          data-testid="likeButton"
        >
          <StarIcon w={3} h={3} />
        </Button>
      )}
      <Box ml={3}>
        <Text fontSize="13px" data-testid="likeNumber">
          {/* 投稿のいいね数を表示する */}
          {favorite && favorite.favoriteNumberData.length}
        </Text>
      </Box>
    </HStack>
  );
};

export default Presenter;
