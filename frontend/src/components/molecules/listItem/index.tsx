import React, { FC } from "react";
import Presenter from "./presenter";
import { ListItemType } from "./type";

const ListItem: FC<ListItemType> = ({ key, index, val, updateIsCompleted }) => {
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
