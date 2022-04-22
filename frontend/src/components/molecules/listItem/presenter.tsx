import React, { FC } from "react";
import { formatDate } from "../../../util/data";
import { Link } from "react-router-dom";
import Label from "../../atoms/label";
import { PresenterType } from "./type";
import Button from "../../atoms/button";
import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Presenter: FC<PresenterType> = ({
  val,
  user,
  favorite,
  handleLike,
  handleUnlike,
}) => {
  return (
    <Box my={5}>
      <Link to={"/" + val.id}>
        <Flex>
          <Box mr={5}>
            <Label>{user.name}</Label>
          </Box>
          <Label>{formatDate(val.createdAt)}</Label>
        </Flex>
        <Box mt={2} mr={3}>
          <Label>{val.name}</Label>
        </Box>
      </Link>
      <Flex mt={4} alignItems="center">
        {favorite && favorite.data.favorite.length ? (
          <Button onClick={handleUnlike}>
            <StarIcon />
          </Button>
        ) : (
          <Button colorScheme="gray" onClick={handleLike}>
            <StarIcon />
          </Button>
        )}
        <Box ml={3}>
          <Label>{favorite && favorite.data.isFavorite.length}</Label>
        </Box>
      </Flex>
    </Box>
  );
};

export default Presenter;
