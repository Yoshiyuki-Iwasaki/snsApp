class Api::V1::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
          render json: user
      else
          render json: user.errors, status: 422
      end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "success."
  end
end