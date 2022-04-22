import React, { FC } from "react";
import { formatDate } from "../../../util/data";
import { Link } from "react-router-dom";
import Label from "../../atoms/label";
import { PresenterType } from "./type";
import Button from "../../atoms/button";
import { Flex, Spacer } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Presenter: FC<PresenterType> = ({
  val,
  user,
  favorite,
  handleLike,
  handleUnlike,
}) => {
  return (
    <>
      <Link to={"/" + val.id}>
        <Flex>
          <Label>{user.name}</Label>
          <Label>{formatDate(val.createdAt)}</Label>
        </Flex>
        <Label>{val.name}</Label>
      </Link>
      <Flex>
        {favorite && favorite.data.favorite.length ? (
          <Button onClick={handleUnlike}>
            <StarIcon />
          </Button>
        ) : (
          <Button colorScheme="gray" onClick={handleLike}>
            <StarIcon />
          </Button>
        )}
        <Label>{favorite && favorite.data.isFavorite.length}</Label>
      </Flex>
    </>
  );
};

export default Presenter;
