class Api::V1::FollowsController < ApplicationController

    def index
        follow = Follow.where(user_id: params[:user_id], todo_id: params[:todo_id])
        render json: follow
    end

    def create
        follow = Follow.new(follow_params)
        if follow.save
            render json: follow
        else
            render json: follow.errors, status: 422
        end
    end

    def destroy
        if Follow.destroy(params[:id])
            head :no_content
        else
            render json: {error: "Failed to destroy"}, status: 422
        end
    end

    private
    def follow_params
        params.permit(:user_id, :todo_id)
    end
end