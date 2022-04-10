class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      redirect_to user_path, notice: "success."
    else
      flash.now[:alert] = "email or password id invalid."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "success."
  end
end