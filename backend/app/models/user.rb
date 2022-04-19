class User < ApplicationRecord
    has_secure_password validations: true # こちらは新機能
    has_many :todos, foreign_key: 'user_id'
    has_many :favorites, foreign_key: 'user_id'

    has_many :followed_users, foreign_key: :follower_id, class_name: 'Relationship'
    has_many :follows, through: :followed_users
    has_many :following_users, foreign_key: :follow_id, class_name: 'Relationship'
    has_many :followers, through: :following_users
end