import React, { FC } from 'react';
import Presenter from './presenter';
import { LikeType } from './type';

const Like: FC<LikeType> = ({ postData, handleLike }) => {
  return <Presenter postData={postData} handleLike={handleLike} />;
};

export default Like;
