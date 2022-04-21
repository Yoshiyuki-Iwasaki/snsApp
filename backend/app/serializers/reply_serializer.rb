# module Todos
  class ReplySerializer < ActiveModel::Serializer
    attributes :id, :name, :created_at
    belongs_to :user
    belongs_to :todo
  end
# end