import React, { FC } from "react";
import { AiFillEdit } from "react-icons/ai";
import { formatDate } from "../../util/data";
import Button from "../../components/atoms/button";
import ListItem from "../../components/molecules/listItem";
import { FiSend } from "react-icons/fi";
import { DetailPageType } from "./type";
import { Box, Flex, Input, Link, Text } from "@chakra-ui/react";

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
    <>
      <Box p={3} borderWidth="1px">
        <Flex>
          {currentTodo.user && (
            <Box mr={3}>
              <Link href={"/user/" + currentTodo.user.id}>
                <Text fontSize="14px" fontWeight="700">
                  {currentTodo.user && currentTodo.user.name}
                </Text>
              </Link>
            </Box>
          )}
          <Text fontSize="13px">{formatDate(currentTodo.createdAt)}</Text>
          <Link href={"/" + params.id + "/edit"}>
            <button>
              <AiFillEdit />
            </button>
          </Link>
        </Flex>
        <Box mt={3}>
          <Text fontSize="15px">{currentTodo.name}</Text>
        </Box>
      </Box>
      <Box mt={3}>
        <Flex>
          <Input
            mt={3}
            mr={2}
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
        </Flex>
        <Box mt={2}>
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
      </Box>
    </>
  );
};

export default Presenter;
