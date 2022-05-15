# module Chat
  class ChatSerializer < ActiveModel::Serializer
    attributes :id, :room, :user, :message, :created_at

    # アソシエーションの指定
    belongs_to :room
    belongs_to :user
  end
# end