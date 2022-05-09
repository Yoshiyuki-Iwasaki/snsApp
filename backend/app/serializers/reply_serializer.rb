# module Replys
  class ReplySerializer < ActiveModel::Serializer
    attributes :id, :name, :user, :post, :created_at
    belongs_to :user
    belongs_to :post
  end
# end