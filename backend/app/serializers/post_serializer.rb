# module Posts
  class PostSerializer < ActiveModel::Serializer
    attributes :id, :content, :user, :created_at
    belongs_to :user
  end
# end