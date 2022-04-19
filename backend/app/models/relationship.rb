class Relationship < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :follow, class_name: 'User', optional: true
  belongs_to :follower, class_name: 'User', optional: true

  # validates :user_id, presence: true
  # validates :follow_id, presence: true
end
