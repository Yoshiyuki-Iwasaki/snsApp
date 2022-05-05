class Relationship < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :follow, class_name: 'User', optional: true
  belongs_to :follower, class_name: 'User', optional: true
  has_many :notifications, foreign_key: 'relationship_id', dependent: :destroy
end
