import React, { FC } from 'react';
import Presenter from './presenter';
import { useFollow } from './hooks';

const Follow: FC = () => {
  const { followState, handleFollow } = useFollow();
  return <Presenter state={followState} method={handleFollow} />;
};

export default Follow;
