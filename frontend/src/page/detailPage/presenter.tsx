import React, { FC } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Icon } from "./style";
import { EditButton } from "./style";
import { formatDate } from "../../util/data";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";
import ListItem from "../../components/molecules/listItem";
import { FiSend } from "react-icons/fi";
import { DetailPageType } from "./type";
import { Box, Flex } from "@chakra-ui/react";

const Presenter: FC<DetailPageType> = ({
  params,
  currentTodo,
  myuser,
  handleInputChange,
  reply,
  replies,
  addReply,
}) => {
  return (
    <>
      <Flex>
        <Box mr={3}>
          {currentTodo.user && (
            <Link to={"/user/" + currentTodo.user.id}>
              <Label>{currentTodo.user && currentTodo.user.name}</Label>
            </Link>
          )}
        </Box>
        <Label>{formatDate(currentTodo.createdAt)}</Label>
      </Flex>
      <Box mt={3}>
        <Label>{currentTodo.name}</Label>
      </Box>
      <Link to={"/" + params.id + "/edit"}>
        <EditButton>
          <AiFillEdit />
        </EditButton>
      </Link>

      <Input name={"name"} value={reply.name} onChange={handleInputChange} />
      <Button
        onClick={addReply}
        disabled={!reply.name || /^\s*$/.test(reply.name)}
      >
        <Icon>
          <FiSend />
        </Icon>
      </Button>
      {replies &&
        replies.data.map(val => {
          return (
            <ListItem key={val.id} myuser={myuser} user={val.user} val={val} />
          );
        })}
    </>
  );
};

export default Presenter;
