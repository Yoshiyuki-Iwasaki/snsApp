# module Replys
  class ReplySerializer < ActiveModel::Serializer
    attributes :id, :content, :user, :post, :created_at
    belongs_to :user
    belongs_to :post
  end
# end