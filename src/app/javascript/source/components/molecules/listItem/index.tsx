import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Main, Checkedbox, Uncheckedbox, EditButton } from "./style";

const ListItem = ({ key, index, val, updateIsCompleted }) => {
  return (
    <Main key={key}>
      {val.is_completed ? (
        <Checkedbox>
          <ImCheckboxChecked onClick={() => updateIsCompleted(index, val)} />
        </Checkedbox>
      ) : (
        <Uncheckedbox>
          <ImCheckboxUnchecked onClick={() => updateIsCompleted(index, val)} />
        </Uncheckedbox>
      )}
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
