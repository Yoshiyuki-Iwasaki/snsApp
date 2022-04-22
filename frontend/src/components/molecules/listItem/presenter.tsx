import React, { FC } from "react";
import { formatDate } from "../../../util/data";
import { Link } from "react-router-dom";
import Label from "../../atoms/label";
import { PresenterType } from "./type";
import SaveButton from "../../atoms/button";
import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Presenter: FC<PresenterType> = ({
  val,
  user,
  favorite,
  handleLike,
  handleUnlike,
}) => {
  return (
    <Box py={3} borderBottom="1px" borderColor="gray.500">
      <Link to={"/" + val.id}>
        <Flex>
          <Box mr={5}>
            <Label>{user.name}</Label>
          </Box>
          <Text fontSize="13px">{formatDate(val.createdAt)}</Text>
        </Flex>
        <Box mt={2} mr={3}>
          <Label>{val.name}</Label>
        </Box>
      </Link>
      <Flex mt={4} alignItems="center">
        {favorite && favorite.data.favorite.length ? (
          <SaveButton onClick={handleUnlike}>
            <StarIcon />
          </SaveButton>
        ) : (
          <SaveButton colorScheme="gray" onClick={handleLike}>
            <StarIcon />
          </SaveButton>
        )}
        <Box ml={3}>
          <Label>{favorite && favorite.data.isFavorite.length}</Label>
        </Box>
      </Flex>
    </Box>
  );
};

export default Presenter;
