class Post < ApplicationRecord
  belongs_to :user, optional: true
  has_many :favorites, foreign_key: 'post_id', dependent: :destroy
  has_many :notifications, foreign_key: 'post_id', dependent: :destroy
end
