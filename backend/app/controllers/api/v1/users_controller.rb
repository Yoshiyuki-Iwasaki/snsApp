class Api::V1::UsersController < ApplicationController

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

    def follow
        user = User.find(params[:id])
        if user.save
            render json: user
        else
            render json: user.errors, status: 422
        end
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            if params[:image]
                @user.image="#{@user.id}.jpg"
                image=params[:image]
                File.binwrite("public/user_images/#{@user.image}", image.read)
                render json: user
            end
        else
            render json: user.errors, status: 422
        end
    end

    private
    def user_params
        params.permit(:name, :email, :image, :password, :password_confirmation)
    end
end