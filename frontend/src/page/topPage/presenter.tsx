import React, { FC } from "react";
import { List } from "./style";
import ListItem from "../../components/molecules/listItem";
import SearchArea from "../../components/molecules/searchArea";
import { TopPageType } from "./type";

const Presenter: FC<any> = ({
  user,
  todos,
  searchName,
  setSearchName,
  removeAllTodos,
  updateIsCompleted,
}) => {
  return (
    <>
      <SearchArea
        setSearchName={setSearchName}
        removeAllTodos={removeAllTodos}
      />
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
                user={user}
                val={val}
                updateIsCompleted={updateIsCompleted}
              />
            );
          })}
      </List>
    </>
  );
};

export default Presenter;
