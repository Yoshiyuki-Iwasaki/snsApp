class User < ApplicationRecord
  # after_create :skip_confirmation_email_for_some_user

  # Include default devise modules.
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable, :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :todos, foreign_key: 'user_id', dependent: :destroy
  has_many :favorites, foreign_key: 'user_id', dependent: :destroy

  has_many :followed_users, foreign_key: :follower_id, class_name: 'Relationship', dependent: :destroy
  has_many :follows, through: :followed_users, dependent: :destroy
  has_many :following_users, foreign_key: :follow_id, class_name: 'Relationship', dependent: :destroy
  has_many :followers, through: :following_users, dependent: :destroy
end