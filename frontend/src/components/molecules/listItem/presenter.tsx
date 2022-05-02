import React, { FC } from "react";
import { formatDate } from "../../../util/data";
import { PresenterType } from "./type";
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";
import { StarIcon, HamburgerIcon } from "@chakra-ui/icons";

const Presenter: FC<PresenterType> = ({
  val,
  user,
  favorite,
  modalOpen,
  detailPageFrag,
  handleLike,
  handleUnlike,
  handleModal,
  deleteTodo,
}) => {
  return (
    <Box my={2} p={3} borderWidth="1px" position="relative">
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
      {modalOpen && (
        <Box position="absolute" top={2} right={16}>
          {/* 詳細ページのみ編集リンク非表示にする */}
          {!detailPageFrag && (
            <Box>
              <Link href={"/todo/" + val.id + "/edit"} fontSize="13px">
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
              onClick={deleteTodo}
            >
              削除
            </Button>
          </Box>
        </Box>
      )}
      {val && (
        <Link href={"/todo/" + val.id}>
          <Flex>
            <Box mr={5}>
              <Text fontSize="14px" fontWeight="700">
                {user.name}
              </Text>
            </Box>
            <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
          </Flex>
          <Box mt={2} mr={3}>
            <Text fontSize="15px">{val.name}</Text>
          </Box>
        </Link>
      )}
      <Flex mt={3} alignItems="center">
        {favorite && favorite.data.favorite.length ? (
          <Button
            m={0}
            p={0}
            minWidth={0}
            height={30}
            width={30}
            bg="#FF69b4"
            onClick={handleUnlike}
          >
            <StarIcon w={3} h={3} color="#fff" />
          </Button>
        ) : (
          <Button
            m={0}
            p={0}
            minWidth={0}
            height={30}
            width={30}
            onClick={handleLike}
          >
            <StarIcon w={3} h={3} />
          </Button>
        )}
        <Box ml={3}>
          <Text fontSize="13px">
            {favorite && favorite.data.isFavorite.length}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Presenter;
