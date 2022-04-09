import React from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { Main, Checkedbox, Uncheckedbox } from "./style";
import { formatDate } from "../../../util/data";
import { Link } from "react-router-dom";
import Label from "../../atoms/label";

const Presenter = ({ key, index, val, updateIsCompleted }) => {
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
      </Link>
    </Main>
  );
};

export default Presenter;
