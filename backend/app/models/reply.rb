class Reply < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :post, optional: true
  has_many :favorites, foreign_key: 'reply_id', dependent: :destroy
end
