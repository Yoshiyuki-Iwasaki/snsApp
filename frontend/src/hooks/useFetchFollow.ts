import { useState, useEffect } from 'react';
import RelationshipApi from '../api/Relationship/api';
import { useParams } from 'react-router-dom';
import useFetchMyUser from './useFetchMyUser';
import { followingList } from '../type/Follow';

// Followを取得するcustom hooks.
const useFetchFollow = () => {
  const [follow, setFollow] = useState<any>();
  const [followingList, setFollowingList] = useState<followingList[]>();
  const [followerList, setFollowerList] = useState<followingList[]>();
  const { myUser } = useFetchMyUser();
  const params = useParams();

  const fetchFollow = async () => {
    try {
      const followRes = await RelationshipApi.fetch(
        myUser && myUser.data.id,
        Number(params.id)
      );
      setFollow(followRes.data);
      const followingRes = await RelationshipApi.fetch_follower(
        Number(params.id)
      );
      setFollowingList(followingRes.data);
      const followerRes = await RelationshipApi.fetch_following(
        Number(params.id)
      );
      setFollowerList(followerRes.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchFollow();
  }, [myUser]);

  return { follow, fetchFollow, followingList, followerList };
};

export default useFetchFollow;
