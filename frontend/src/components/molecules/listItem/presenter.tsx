import React, { FC } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { Main, Checkedbox, Uncheckedbox } from "./style";
import { formatDate } from "../../../util/data";
import { Link } from "react-router-dom";
import Label from "../../atoms/label";
import { PresenterType } from "./type";
import Button from "../../atoms/button";

const Presenter: FC<PresenterType> = ({
  key,
  index,
  val,
  updateIsCompleted,
  favorite,
  handleLike,
  handleUnlike,
}) => {
  return (
    <Main key={key}>
      {val.completed ? (
        <Checkedbox>
          <ImCheckboxChecked onClick={() => updateIsCompleted(index, val)} />
        </Checkedbox>
      ) : (
        <Uncheckedbox>
          <ImCheckboxUnchecked onClick={() => updateIsCompleted(index, val)} />
        </Uncheckedbox>
      )}
      <Link to={"/" + val.id}>
        <Label>{formatDate(val.createdAt)}</Label>
        <Label>{val.name}</Label>
        <Label>投稿者: {val.user.name}</Label>
      </Link>
      {favorite && favorite.data.length ? (
        <Button onClick={handleUnlike}>いいね削除</Button>
      ) : (
        <Button onClick={handleLike}>いいね</Button>
      )}
    </Main>
  );
};

export default Presenter;
