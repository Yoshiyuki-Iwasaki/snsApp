import { useState, useEffect } from "react";
import RelationshipApi from "../api/Relationship/api";
import { useParams } from "react-router-dom";
import useFetchMyUser from "./useFetchMyUser";

const useFetchFollow = () => {
  const [follow, setFollow] = useState<any>();
  const { myUser } = useFetchMyUser();
  const params = useParams();

  const fetchFollow = async () => {
    const followRes = await RelationshipApi.fetch(
      myUser && myUser.data.id,
      Number(params.id)
    );
    setFollow(followRes);
  };

  useEffect(() => {
    fetchFollow();
    console.log("follow", follow);
  }, []);

  return { follow, fetchFollow };
};

export default useFetchFollow;
