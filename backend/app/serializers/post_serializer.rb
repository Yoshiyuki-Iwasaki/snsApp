# module Posts
  class PostSerializer < ActiveModel::Serializer
    attributes :id, :name, :user, :created_at
    belongs_to :user
  end
# end