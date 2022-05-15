# module Relationship
  class RelationshipSerializer < ActiveModel::Serializer
    attributes :id, :following, :follower, :created_at

    # アソシエーションの指定
    belongs_to :following
    belongs_to :follower
  end
# end