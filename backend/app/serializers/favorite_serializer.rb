# module Favorites
  class FavoriteSerializer < ActiveModel::Serializer
    attributes :id, :user, :post, :reply, :created_at
    belongs_to :user
    belongs_to :post
    belongs_to :reply
  end
# end