class Api::V1::NotificationsController < ApplicationController

    def index
        #自分へ当てられた通知を取得
        notifications = Notification.where(visited_id: params[:id])
        render json: notifications
    end

    def create
        notification = Notification.new(notification_params)
        if notification.save
            render json: notification
        else
            render json: notification.errors, status: 422
        end
    end

    def update
        notification = Notification.find(params[:id])
        if notification.update(notification_params)
            render json: notification
        else
            render json: notification.errors, status: 422
        end
    end

    private
    def notification_params
        params.permit(:url, :visiter_id, :visited_id, :post_id, :type, :checked)
    end
end