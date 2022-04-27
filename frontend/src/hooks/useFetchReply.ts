import { useState, useEffect } from "react";
import ReplyApi from "../api/Reply/api";

const useFetchAllTodos = params => {
  const [replies, setReplies] = useState<any>();

  const fetchReply = async () => {
    const ReplyRes = await ReplyApi.fetch(Number(params.id));
    setReplies(ReplyRes);
    console.log(ReplyRes);
  };

  useEffect(() => {
    fetchReply();
  }, []);

  return { replies, fetchReply };
};

export default useFetchAllTodos;
