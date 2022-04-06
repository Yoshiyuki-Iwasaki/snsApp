import React, { FC } from 'react';
import { FollowButton } from './style';
import { PresenterType } from './type';

const Presenter: FC<PresenterType> = ({ state, method }) => {
  return (
    <FollowButton data-testid="button" onClick={method}>
      {state ? 'フォロー削除' : 'フォロー'}
    </FollowButton>
  );
};

export default Presenter;
