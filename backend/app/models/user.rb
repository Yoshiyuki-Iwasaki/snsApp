class User < ApplicationRecord
    has_secure_password validations: true # こちらは新機能
    has_many :todos, foreign_key: 'user_id'
end