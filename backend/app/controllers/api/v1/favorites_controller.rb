class Api::V1::FavoritesController < ApplicationController

    def index
        # いいねしているかどうかをチェック
        favoriteData = Favorite.order(created_at: :desc).where(user_id: params[:user_id], post_id: params[:post_id])
        # いいね数をチェック
        favoriteNumberData = Favorite.where(post_id: params[:post_id]);
        render json: {favoriteData: favoriteData, favoriteNumberData: favoriteNumberData}
    end

    def replyIndex
        # いいねしているかどうかをチェック
        favoriteData = Favorite.order(created_at: :desc).where(user_id: params[:user_id], reply_id: params[:reply_id])
        # いいね数をチェック
        favoriteNumberData = Favorite.where(reply_id: params[:reply_id]);
        render json: {favoriteData: favoriteData, favoriteNumberData: favoriteNumberData}
    end

    def userIndex
        favoriteData = Favorite.order(created_at: :desc).where(user_id: params[:id])
        render json: favoriteData
    end

    def create
        favoriteData = Favorite.new(favorite_params)
        if favoriteData.save
            render json: favoriteData
        else
            render json: favoriteData.errors, status: 422
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
        params.permit(:user_id, :post_id, :reply_id)
    end
end