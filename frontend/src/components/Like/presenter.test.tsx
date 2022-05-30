import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Presenter from './presenter';

// ダミーデータ
const favoriteData = {
  favoriteData: {
    length: 0,
  },
  favoriteNumberData: {
    length: 0,
  },
};

const favoritedData = {
  favoriteData: {
    length: 1,
  },
  favoriteNumberData: {
    length: 1,
  },
};

describe('Like Presenter', () => {
  it('レンダリングされているか', () => {
    // レンダリング
    render(<Presenter favorite={favoriteData} />);

    // いいねボタン
    const likeButton: any = screen.getByTestId('likeButton');
    // いいね数
    const likeNumber: any = screen.getByTestId('likeNumber');
    // いいねボタンがレンダリングされていることを確認
    expect(likeButton).toBeTruthy();
    // いいね数がレンダリングされていることを確認
    expect(likeNumber).toBeTruthy();

    // レンダリング
    render(<Presenter favorite={favoritedData} />);

    // いいね削除ボタン
    const unlikeButton: any = screen.getByTestId('unlikeButton');
    // いいね削除ボタンがレンダリングされていることを確認
    expect(unlikeButton).toBeTruthy();
  });
});
