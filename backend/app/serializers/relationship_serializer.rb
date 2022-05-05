# module Relationship
  class RelationshipSerializer < ActiveModel::Serializer
    attributes :id, :following, :follower

    # アソシエーションの指定
    belongs_to :following
    belongs_to :follower
  end
# end