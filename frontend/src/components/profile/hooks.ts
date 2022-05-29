import { useState, useEffect, useCallback } from 'react';
import UserApi from '../../api/User/api';
import PostApi from '../../api/Post/api';
import FavoriteApi from '../../api/Favorite/api';
import useFetchMyUser from '../../hooks/useFetchMyUser';

// UserRoomを取得するcustom hooks.
export const useFetchUserRoom = (id) => {
  const { myUser } = useFetchMyUser();
  const [chatRoom, setChatRoom] = useState();

  const fetchUserRoom = async () => {
    try {
      const room = await UserApi.fetchUserRoom(myUser.data.id, Number(id));
      setChatRoom(room.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    myUser && fetchUserRoom();
  }, [myUser]);

  return { chatRoom, fetchUserRoom };
};

// 自分が投稿したPostを取得するcustom hooks.
export const useFetchMyPost = (id: number) => {
  const [myPost, setMyPost] = useState<any>();
  const fetchMyPost = useCallback(async () => {
    try {
      const PostRes = await PostApi.fetch_userPost(id);
      setMyPost(PostRes.data);
    } catch (e: any) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    fetchMyPost();
  }, [id, fetchMyPost]);

  return myPost;
};

// いいねしたPostを取得するcustom hooks.
export const useFetchLikedMyPost = (id: number) => {
  const [likedPost, setLikedPost] = useState<any>([]);

  useEffect(() => {
    const fetchLikedPost = async () => {
      try {
        const FavoriteRes = await FavoriteApi.fetch_userPost(id);
        setLikedPost(FavoriteRes.data);
      } catch (e: any) {
        console.log(e);
      }
    };
    fetchLikedPost();
  }, []);

  return likedPost;
};
