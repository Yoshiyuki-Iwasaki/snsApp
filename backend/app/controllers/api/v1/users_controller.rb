class Api::V1::UsersController < ApplicationController

    def new
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: user.errors, status: 422
        end
    end

    def show
    user = User.find(params[:id])
    render json: user
    end

    private
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end