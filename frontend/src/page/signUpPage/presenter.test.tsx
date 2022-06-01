import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Presenter from './presenter';

// ダミーデータ
const dummySignUpText = {
  name: '',
  email: 'test@gmail.com',
  password: 'password',
  password_confirmation: 'password',
};

describe('SignUp Presenter', () => {
  it('レンダリングされているか', () => {
    // レンダリング
    render(<Presenter signUpInfo={dummySignUpText} />);

    // 検索ボタン
    const button: any = screen.getByTestId('button');
    // 検索フォーム
    const nameInput: any = screen.getByTestId('nameInput');
    // 検索ボタン
    const emailInput: any = screen.getByTestId('emailInput');
    // 検索フォーム
    const passwordInput: any = screen.getByTestId('passwordInput');
    // 検索フォーム
    const password_confirmationInput: any = screen.getByTestId(
      'password_confirmationInput'
    );

    // 検索ボタンがレンダリングされていることを確認
    expect(button).toBeTruthy();
    // 検索フォームがレンダリングされていることを確認
    expect(nameInput).toBeTruthy();
    // 検索ボタンがレンダリングされていることを確認
    expect(emailInput).toBeTruthy();
    // 検索フォームがレンダリングされていることを確認
    expect(passwordInput).toBeTruthy();
    // 検索フォームがレンダリングされていることを確認
    expect(password_confirmationInput).toBeTruthy();
  });

  it('問題なくフォームにテキストが入力できているか', () => {
    // レンダリング
    render(<Presenter signUpInfo={dummySignUpText} />);
    // 検索フォーム
    const nameInput: any = screen.getByTestId('nameInput');
    // 検索フォームにtestの値を入れる
    userEvent.type(nameInput, 'test');
    // 検索フォームのvalue値がtestか確認する
    expect(nameInput.value).toBe('test');
    // 検索フォーム
    const emailInput: any = screen.getByTestId('emailInput');
    // 検索フォームにtestの値を入れる
    userEvent.type(emailInput, 'test');
    // 検索フォームのvalue値がtestか確認する
    expect(emailInput.value).toBe('test');
    // 検索フォーム
    const passwordInput: any = screen.getByTestId('passwordInput');
    // 検索フォームにtestの値を入れる
    userEvent.type(passwordInput, 'test');
    // 検索フォームのvalue値がtestか確認する
    expect(passwordInput.value).toBe('test');
    // 検索フォーム
    const password_confirmationInput: any = screen.getByTestId(
      'password_confirmationInput'
    );
    // 検索フォームにtestの値を入れる
    userEvent.type(password_confirmationInput, 'test');
    // 検索フォームのvalue値がtestか確認する
    expect(password_confirmationInput.value).toBe('test');
  });
});
