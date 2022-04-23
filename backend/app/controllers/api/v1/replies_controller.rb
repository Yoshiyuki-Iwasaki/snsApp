class Api::V1::RepliesController < ApplicationController
    def index
        replies = Reply.where(todo_id: params[:id])
        render json: replies
    end

    def create
        reply = Reply.new(reply_params)
        if reply.save
            render json: reply
        else
            render json: reply.errors, status: 422
        end
    end

    def update
        reply = Reply.find(params[:id])
        if reply.update(reply_params)
            render json: reply
        else
            render json: reply.errors, status: 422
        end
    end

    def destroy
        if Reply.destroy(params[:id])
            head :no_content
        else
            render json: {error: "Failed to destroy"}, status: 422
        end
    end

    private
    def reply_params
        params.require(:reply).permit(:name, :user_id, :todo_id)
    end
end