import React, { FC } from "react";
import { formatDate } from "../../../util/data";
import { Link } from "react-router-dom";
import { PresenterType } from "./type";
import SaveButton from "../../atoms/button";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Presenter: FC<PresenterType> = ({
  val,
  user,
  favorite,
  handleLike,
  handleUnlike,
}) => {
  return (
    <Box my={2} p={3} borderWidth="1px">
      <Link to={"/todo/" + val.id}>
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
      <Flex mt={3} alignItems="center">
        {favorite && favorite.data.favorite.length ? (
          <Button
            m={0}
            p={0}
            minWidth={0}
            height="25px"
            width="25px"
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
            height="25px"
            width="25px"
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
