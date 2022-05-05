import { useState, useEffect } from 'react';
import RelationshipApi from '../api/Relationship/api';
import { useParams } from 'react-router-dom';
import useFetchMyUser from './useFetchMyUser';

// Followを取得するcustom hooks.
const useFetchFollow = () => {
  const [follow, setFollow] = useState<any>();
  const [followingList, setFollowingList] = useState<any>();
  const [followerList, setFollowerList] = useState<any>();
  const { myUser } = useFetchMyUser();
  const params = useParams();

  console.log(params.id);

  const fetchFollow = async () => {
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
  };

  useEffect(() => {
    fetchFollow();
  }, [myUser]);

  return { follow, fetchFollow, followingList, followerList };
};

export default useFetchFollow;
