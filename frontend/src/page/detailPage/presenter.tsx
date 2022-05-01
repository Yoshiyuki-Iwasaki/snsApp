import React, { FC } from "react";
import { AiFillEdit } from "react-icons/ai";
import { formatDate } from "../../util/data";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import ListItem from "../../components/molecules/listItem";
import { FiSend } from "react-icons/fi";
import { DetailPageType } from "./type";
import { Box, Flex, Input, Link } from "@chakra-ui/react";

const Presenter: FC<DetailPageType> = ({
  params,
  currentTodo,
  myUser,
  handleInputChange,
  reply,
  replies,
  addReply,
}) => {
  return (
    <Box p="5">
      <Flex>
        {currentTodo.user && (
          <Box mr={3}>
            <Link href={"/user/" + currentTodo.user.id}>
              <Label>{currentTodo.user && currentTodo.user.name}</Label>
            </Link>
          </Box>
        )}
        <Label>{formatDate(currentTodo.createdAt)}</Label>
        <Link href={"/" + params.id + "/edit"}>
          <button>
            <AiFillEdit />
          </button>
        </Link>
      </Flex>
      <Box mt={3}>
        <Label>{currentTodo.name}</Label>
      </Box>

      <Input
        mt={3}
        name={"name"}
        value={reply.name}
        onChange={handleInputChange}
      />
      <Button
        mt={3}
        onClick={addReply}
        disabled={!reply.name || /^\s*$/.test(reply.name)}
      >
        <button>
          <FiSend />
        </button>
      </Button>
      {replies &&
        replies.data.map(val => {
          return (
            <ListItem
              key={val.id}
              myUser={myUser}
              user={val.user}
              val={val}
              detailPageFrag={true}
            />
          );
        })}
    </Box>
  );
};

export default Presenter;
