import { FC, useEffect, useState } from "react";
import UserApi from "../api/User/api";

const useFetchMyUser = () => {
  const [myUser, setMyUser] = useState<any>();

  const fetchUser = async () => {
    const userRes = await UserApi.fetchLoginUser();
    setMyUser(userRes.data);
    console.log("userRes", userRes.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { myUser, setMyUser, fetchUser };
};

export default useFetchMyUser;
