class Api::V1::ChatsController < ApplicationController
    def index
        chats = Chat.order(created_at: :asc).where(room_id: params[:id])
        render json: chats
    end

    def create
        chat = Chat.new(chat_params)
        if chat.save
            render json: chat
        else
            render json: chat.errors, status: 422
        end
    end

    private
    def chat_params
        params.permit(:message, :user_id, :room_id)
    end
end