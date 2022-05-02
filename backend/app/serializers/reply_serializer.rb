# module Todos
  class ReplySerializer < ActiveModel::Serializer
    attributes :id, :name, :user, :todo, :created_at
    belongs_to :user
    belongs_to :todo
  end
# end