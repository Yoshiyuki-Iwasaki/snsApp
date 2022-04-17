class Api::V1::SessionsController < ApplicationController

  def create
      user = User.find_by_email(params[:email])
      if user && user.authenticate(params[:password])
          session[:user_id] = user.id
          render json: { logged_in: true, user: user }
      else
          render json: { status: 401, errors: ['認証に失敗しました。', '正しいメールアドレス・パスワードを入力し直すか、新規登録を行ってください。'] }
      end
  end

  def destroy
    session[:user_id] = nil
  end

  def logged_in?
      if @current_user
          render json: { logged_in: true, user: current_user }
      else
          render json: { logged_in: false, message: 'ユーザーが存在しません' }
      end
  end

  private
  def session_params
      params.require(:user).permit(:name, :email, :password)
  end
end