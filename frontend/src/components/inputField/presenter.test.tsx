import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Presenter from './presenter';

// ダミーデータ
const dummySearchText = {
  content: 'test',
};

describe('InputArea Presenter', () => {
  it('レンダリングされているか', () => {
    // レンダリング
    render(
      <Presenter
        post={dummySearchText}
        addPost={() => {}}
        handleInputChange={() => {}}
      />
    );

    // 検索ボタン
    const inputArea_button: any = screen.getByTestId('button');
    // 検索フォーム
    const inputArea_input: any = screen.getByTestId('input');

    // 検索ボタンがレンダリングされていることを確認
    expect(inputArea_button).toBeTruthy();
    // 検索フォームがレンダリングされていることを確認
    expect(inputArea_input).toBeTruthy();
  });

  it('問題なく検索フォームにテキストが入力できているか', () => {
    // レンダリング
    render(
      <Presenter
        post={dummySearchText}
        addPost={() => {}}
        handleInputChange={() => {}}
      />
    );
    // 検索フォーム
    const inputArea_input: any = screen.getByTestId('input');
    // 検索フォームにtestの値を入れる
    userEvent.type(inputArea_input, 'test');
    // 検索フォームのvalue値がtestか確認する
    expect(inputArea_input.value).toBe('test');
  });
});
