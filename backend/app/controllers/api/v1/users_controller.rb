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

    def userChat

        # カレントユーザーのuser_roomにあるroom_idの値の配列をroomsに代入。
        rooms = UserRoom.where(user_id: params[:myUser_id].to_i).pluck(:room_id)

        # user_roomモデルから
        # user_idがチャット相手のidが一致するものと、
        # room_idが上記roomsのどれかに一致するレコードを
        # user_roomに代入。
        user_room = UserRoom.where(user_id: params[:users_id].to_i, room_id: rooms).first

        # もしuser_roomが空でないなら
        unless user_room.nil?
            # roomに上記user_roomのroomを代入
            # room = user_room.room
        else
            # それ以外は新しくroomを作り、
            room = Room.new
            room.save
            # user_roomをカレントユーザー分とチャット相手分を作る
            UserRoom.create(user_id: params[:myUser_id], room_id: room.id)
            user_room = UserRoom.create(user_id: params[:users_id], room_id: room.id)
        end
        render json: user_room
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
            render json: user
        else
            render json: user.errors, status: 422
        end
    end

    private
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end