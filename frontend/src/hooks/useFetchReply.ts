import { useState, useEffect } from 'react';
import ReplyApi from '../api/Reply/api';
import { useParams } from 'react-router-dom';

// Replyを取得するcustom hooks.
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
