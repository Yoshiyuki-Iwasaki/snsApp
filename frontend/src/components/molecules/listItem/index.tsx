import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Main, Checkedbox, Uncheckedbox, EditButton } from "./style";
import { formatDate } from "../../../util/data";

const ListItem = ({ key, index, val, updateIsCompleted }) => {
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
      {formatDate(val.created_at)}
      {val.name}
      <Link to={"/" + val.id + "/edit"}>
        <EditButton>
          <AiFillEdit />
        </EditButton>
      </Link>
    </Main>
  );
};

export default ListItem;
