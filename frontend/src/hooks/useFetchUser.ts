import { useEffect, useState } from "react";
import UserApi from "../api/User/api";

const useFetchUser = async key => {
  const [user, setUser] = useState<any>();
  const fetchTodo = async () => {
    const userId = localStorage.getItem(key);
    const userRes = await UserApi.show(userId);
    setUser(userRes.data);
  };
  useEffect(() => {
    fetchTodo();
  });

  return { user };
};

export default useFetchUser;
