import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Presenter from './presenter';

// ダミーデータ
const dummyInputText = {
  content: '',
};

describe('InputArea Presenter', () => {
  it('レンダリングされているか', () => {
    // レンダリング
    render(<Presenter post={dummyInputText} />);

    // 検索ボタン
    const inputArea_button: any = screen.getByTestId('button');
    // 検索フォーム
    const inputArea_input: any = screen.getByTestId('input');
    // 検索ボタンがレンダリングされていることを確認
    expect(inputArea_button).toBeTruthy();
    // 検索フォームがレンダリングされていることを確認
    expect(inputArea_input).toBeTruthy();
  });

  it('ボタンの初期値がdisabledになっているか', () => {
    // レンダリング
    render(<Presenter post={dummyInputText} />);
    // 検索フォーム
    const search_button: any = screen.getByTestId('button');
    // 検索フォームのvalue値がtestか確認する
    expect(search_button).toBeDisabled();
  });
});
