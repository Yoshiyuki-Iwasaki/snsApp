class Todo < ApplicationRecord
    belongs_to :user, optional: true
    has_many :favorites, foreign_key: 'todo_id', dependent: :destroy
end
