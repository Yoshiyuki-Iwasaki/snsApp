class Api::V1::RelationshipsController < ApplicationController

    def index
        # フォローしているかどうかをチェック
        relationship = Relationship.where(following_id: params[:following_id], follower_id: params[:follower_id])
        # 特定のユーザーをフォローしているかチェック
        isRelationship_following = Relationship.where(following_id: params[:follower_id]);
        # 特定のユーザーがフォローされているかチェック
        isRelationship_followed = Relationship.where(follower_id: params[:follower_id]);
        render json: {relationship: relationship, isRelationship_following: isRelationship_following, isRelationship_followed: isRelationship_followed}
    end

    def followingIndex
        relationship = Relationship.where(follower_id: params[:follower_id]);
        render json: relationship
    end

    def followerIndex
        relationship = Relationship.where(following_id: params[:following_id]);
        render json: relationship
    end

    def create
        relationship = Relationship.new(relationship_params)
        if relationship.save
            render json: relationship
        else
            render json: relationship.errors, status: 422
        end
    end

    def destroy
        if Relationship.destroy(params[:id])
            head :no_content
        else
            render json: {error: "Failed to destroy"}, status: 422
        end
    end

    private
    def relationship_params
        params.permit(:following_id, :follower_id)
    end
end