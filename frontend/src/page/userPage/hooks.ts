import { useState, useEffect, useCallback } from 'react';
import { notify } from '../../util/notify';
import RelationshipApi from '../../api/Relationship/api';
import NotificationApi from '../../api/Notification/api';
import UserApi from '../../api/User/api';
import PostApi from '../../api/Post/api';
import FavoriteApi from '../../api/Favorite/api';
import useFetchMyUser from '../../hooks/useFetchMyUser';

// フォロー削除処理をするcustom hooks.
export const useHandleUnFollow = (follow, fetchFollow) => {
  const handleUnfollow = async () => {
    try {
      await RelationshipApi.remove(follow.relationship[0].id);
      notify('正常にフォロー削除完了しました。');
      fetchFollow();
    } catch (e: any) {
      console.log(e);
    }
  };
  return handleUnfollow;
};

// Followを取得するcustom hooks.
export const useHandleFollow = (myUser, params, fetchFollow) => {
  const handleFollow = async () => {
    const data = {
      following_id: myUser && myUser.data.id,
      follower_id: Number(params.id),
    };
    const notificationData = {
      visiter_id: myUser && myUser.data.id,
      visited_id: Number(params.id),
      type: 'follow',
      checked: false,
    };
    try {
      await NotificationApi.create(notificationData);
      await RelationshipApi.create(myUser && myUser.data.id, data);
      notify('正常にフォローが完了しました。');
      fetchFollow();
    } catch (e) {
      console.log(e);
    }
  };

  return handleFollow;
};

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
