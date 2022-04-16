import React, { FC } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { EditButton } from "./style";
import { formatDate } from "../../util/data";
import Label from "../../components/atoms/label";
import { DetailPageType } from "./type";

const Presenter: FC<DetailPageType> = ({ params, currentTodo }) => {
  return (
    <>
      <Label>{formatDate(currentTodo.createdAt)}</Label>
      <Label>{currentTodo.name}</Label>
      <Link to={"/" + params.id + "/edit"}>
        <EditButton>
          <AiFillEdit />
        </EditButton>
      </Link>
    </>
  );
};

export default Presenter;
