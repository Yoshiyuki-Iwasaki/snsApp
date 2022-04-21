import React, { FC } from "react";
import { List } from "./style";
import ListItem from "../../components/molecules/listItem";
import SearchArea from "../../components/molecules/searchArea";
import { PresenterType } from "./type";

const Presenter: FC<PresenterType> = ({
  user,
  todos,
  searchName,
  setSearchName,
}) => {
  return (
    <>
      <SearchArea setSearchName={setSearchName} />
      <List>
        {todos
          .filter(val => {
            if (searchName === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, index) => {
            return (
              <ListItem
                key={index}
                index={index}
                myuser={user}
                user={val.user}
                val={val}
              />
            );
          })}
      </List>
    </>
  );
};

export default Presenter;
