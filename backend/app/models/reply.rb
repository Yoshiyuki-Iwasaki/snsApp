class Reply < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :todo, optional: true
  has_many :favorites, foreign_key: 'reply_id', dependent: :destroy
  has_many :notifications, foreign_key: 'reply_id', dependent: :destroy
end
