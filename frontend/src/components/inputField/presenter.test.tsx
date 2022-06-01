import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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
    // ボタン
    const inputArea_button: any = screen.getByTestId('button');
    // フォーム
    const inputArea_input: any = screen.getByTestId('input');
    // ボタンがレンダリングされていることを確認
    expect(inputArea_button).toBeTruthy();
    // フォームがレンダリングされていることを確認
    expect(inputArea_input).toBeTruthy();
  });

  it('Inputの初期値が空欄になっているか', () => {
    // レンダリング
    render(<Presenter post={dummyInputText} />);
    // フォーム
    const inputArea_input: any = screen.getByTestId('input');
    // フォームのvalue値がtestか確認する
    expect(inputArea_input.value).toBe('');
  });

  it('ボタンの初期値がdisabledになっているか', () => {
    // レンダリング
    render(<Presenter post={dummyInputText} />);
    // ボタン
    const search_button: any = screen.getByTestId('button');
    // ボタンの初期値がdisabledになっているか
    expect(search_button).toBeDisabled();
  });
});
