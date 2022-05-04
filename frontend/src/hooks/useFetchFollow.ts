import { useState, useEffect } from 'react';
import RelationshipApi from '../api/Relationship/api';
import { useParams } from 'react-router-dom';
import useFetchMyUser from './useFetchMyUser';

// Followを取得するcustom hooks.
const useFetchFollow = () => {
  const [follow, setFollow] = useState<any>();
  const { myUser } = useFetchMyUser();
  const params = useParams();

  const fetchFollow = async () => {
    const followRes = await RelationshipApi.fetch(
      myUser && myUser.data.id,
      Number(params.id)
    );
    setFollow(followRes.data);
  };

  useEffect(() => {
    fetchFollow();
  }, []);

  return { follow, fetchFollow };
};

export default useFetchFollow;
