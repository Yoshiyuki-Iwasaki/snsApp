import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Presenter from './presenter';

// ダミーデータ
const dummySearchText = {
  content: 'test',
};

describe('SearchArea Presenter', () => {
  it('レンダリングされているか', () => {
    // レンダリング
    render(
      <Presenter
        search={dummySearchText}
        handleInputChange={() => {}}
        handleSearch={() => {}}
      />
    );

    // 検索ボタン
    const search_button: any = screen.getByTestId('button');
    // 検索フォーム
    const search_input: any = screen.getByTestId('input');

    // 検索ボタンがレンダリングされていることを確認
    expect(search_button).toBeTruthy();
    // 検索フォームがレンダリングされていることを確認
    expect(search_input).toBeTruthy();
  });

  it('問題なく検索フォームにテキストが入力できているか', () => {
    // レンダリング
    render(
      <Presenter
        search={dummySearchText}
        handleInputChange={() => {}}
        handleSearch={() => {}}
      />
    );
    // 検索フォーム
    const search_input: any = screen.getByTestId('input');
    // 検索フォームにtestの値を入れる
    userEvent.type(search_input, 'test');
    // 検索フォームのvalue値がtestか確認する
    expect(search_input.value).toBe('test');
  });
});
