class Api::V1::RelationshipsController < ApplicationController

    def index
        relationship = Relationship.where(follow_id: params[:id], follower_id: params[:follower_id])
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
        params.permit(:follow_id, :follower_id)
    end
end