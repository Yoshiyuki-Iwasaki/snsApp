import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Presenter from './presenter';

// ダミーデータ
const dummyFollowData = {
  isRelationshipFollowing: {
    length: 0,
  },
  isRelationshipFollowed: {
    length: 0,
  },
  relationship: {
    length: 0,
  },
};

const dummyFollowedData = {
  isRelationshipFollowing: {
    length: 1,
  },
  isRelationshipFollowed: {
    length: 1,
  },
  relationship: {
    length: 1,
  },
};

describe('followButton Presenter', () => {
  it('followButtonがレンダリングされているか', () => {
    // レンダリング
    render(<Presenter follow={dummyFollowData} />);
    // フォローボタン
    const followButton: any = screen.getByTestId('followButton');
    // フォローボタンがレンダリングされていることを確認
    expect(followButton).toBeTruthy();
  });

  it('unfollowButtonがレンダリングされているか', () => {
    // レンダリング
    render(<Presenter follow={dummyFollowedData} />);
    // フォローボタン
    const unfollowButton: any = screen.getByTestId('unfollowButton');
    // フォローボタンがレンダリングされていることを確認
    expect(unfollowButton).toBeTruthy();
  });
});
