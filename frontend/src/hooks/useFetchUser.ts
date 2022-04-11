import { useState } from "react";
import UserApi from "../api/User/api";
import storageUtils from "../util/storage";

const useFetchUser = () => {
  const users = JSON.parse(localStorage.getItem("userId"));
  return { users };
};

export default useFetchUser;
