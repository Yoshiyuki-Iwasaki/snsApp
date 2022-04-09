import React from "react";
import Presenter from "./presenter";

const ListItem = ({ key, index, val, updateIsCompleted }) => {
  return (
    <Presenter
      key={key}
      index={index}
      val={val}
      updateIsCompleted={updateIsCompleted}
    />
  );
};

export default ListItem;
