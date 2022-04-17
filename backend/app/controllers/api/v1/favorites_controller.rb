class Api::V1::FavoritesController < ApplicationController

    def index
        favorite = Favorite.where(user_id: params[:user_id], todo_id: params[:todo_id])
        render json: favorite
    end

    def create
        favorite = Favorite.new(favorite_params)
        if favorite.save
            render json: favorite
        else
            render json: favorite.errors, status: 422
        end
    end

    def destroy
        if Favorite.destroy(params[:id])
            head :no_content
        else
            render json: {error: "Failed to destroy"}, status: 422
        end
    end

    private
    def favorite_params
        params.permit(:user_id, :todo_id)
    end
end