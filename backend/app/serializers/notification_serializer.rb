# module Notification
  class NotificationSerializer < ActiveModel::Serializer
    attributes :id, :url, :visiter, :visited, :post, :type, :checked, :created_at

    # アソシエーションの指定
    belongs_to :post
    belongs_to :visiter
    belongs_to :visited
  end
# end