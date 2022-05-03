class Notification < ApplicationRecord
  belongs_to :todo_id
  belongs_to :reply_id
  belongs_to :relationship_id
  belongs_to :favorite_id
end
