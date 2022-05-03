import { useState, useEffect } from 'react';
import ReplyApi from '../api/Reply/api';
import { useParams } from 'react-router-dom';

const useFetchReply = () => {
  const [replies, setReplies] = useState<any>();
  const params = useParams();

  const fetchReply = async () => {
    const ReplyRes = await ReplyApi.fetch(Number(params.id));
    setReplies(ReplyRes.data);
  };

  useEffect(() => {
    fetchReply();
  }, []);

  return { replies, fetchReply };
};

export default useFetchReply;
