import React, { FC } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Icon } from "./style";
import { EditButton } from "./style";
import { formatDate } from "../../util/data";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";
import ListItem from "../../components/molecules/listItem";
import { FiSend } from "react-icons/fi";
import { DetailPageType } from "./type";
import { Box, Flex, Container, Link } from "@chakra-ui/react";

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
      <Container>
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
            <EditButton>
              <AiFillEdit />
            </EditButton>
          </Link>
        </Flex>
        <Box mt={3}>
          <Label>{currentTodo.name}</Label>
        </Box>
      </Container>

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
            <ListItem
              key={val.id}
              myUser={myUser}
              user={val.user}
              val={val}
              detailPageFrag={true}
            />
          );
        })}
    </>
  );
};

export default Presenter;
