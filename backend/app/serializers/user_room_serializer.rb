# module UserRoom
  class UserRoomSerializer < ActiveModel::Serializer
    attributes :id, :user, :room, :created_at

    # アソシエーションの指定
    belongs_to :user
    belongs_to :room
  end
# end