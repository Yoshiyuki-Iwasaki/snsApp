# module Notification
  class NotificationSerializer < ActiveModel::Serializer
    attributes :id, :visiter, :visited, :todo, :type, :checked, :created_at

    # アソシエーションの指定
    belongs_to :todo
    belongs_to :visiter
    belongs_to :visited
  end
# end