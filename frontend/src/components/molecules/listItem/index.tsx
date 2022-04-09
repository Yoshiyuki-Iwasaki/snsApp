import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { Main, Checkedbox, Uncheckedbox } from "./style";
import { formatDate } from "../../../util/data";
import { Link } from "react-router-dom";

const ListItem = ({ key, index, val, updateIsCompleted }) => {
  return (
    <Main key={key}>
      <Link to={"/" + val.id}>
        {val.completed ? (
          <Checkedbox>
            <ImCheckboxChecked onClick={() => updateIsCompleted(index, val)} />
          </Checkedbox>
        ) : (
          <Uncheckedbox>
            <ImCheckboxUnchecked
              onClick={() => updateIsCompleted(index, val)}
            />
          </Uncheckedbox>
        )}
        {formatDate(val.createdAt)}
        {val.name}
      </Link>
    </Main>
  );
};

export default ListItem;
