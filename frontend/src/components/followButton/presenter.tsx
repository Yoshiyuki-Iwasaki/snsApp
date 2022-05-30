import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({
  follow,
  handleUnfollow,
  handleFollow,
}) => {
  return (
    <>
      {follow && follow.relationship.length ? (
        <Button data-testid="unfollowButton" onClick={handleUnfollow}>
          フォロー削除
        </Button>
      ) : (
        <Button data-testid="followButton" onClick={handleFollow}>
          フォロー
        </Button>
      )}
    </>
  );
};

export default Presenter;
