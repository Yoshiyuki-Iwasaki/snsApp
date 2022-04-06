import { useState } from 'react';

export const useFollow = () => {
  const [followState, setFollowState] = useState(false);

  const handleFollow = () => {
    setFollowState(!followState);
  };
  return { followState, handleFollow };
};
