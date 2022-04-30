# module Todos
  class FavoriteSerializer < ActiveModel::Serializer
    attributes :id, :created_at
    belongs_to :user
    belongs_to :todo
    belongs_to :reply
  end
# end