import React, { FC } from "react";
import { LikeType } from "./type";
import { Button } from "@chakra-ui/react";

const Presenter: FC<LikeType> = ({ postData, handleLike }) => {
  return (
    <Button data-testid="like" onClick={() => handleLike(postData)}>
      {postData.likeCount}
    </Button>
  );
};

export default Presenter;
