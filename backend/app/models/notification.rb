class Notification < ApplicationRecord
  belongs_to :todo_id, optional: true
  belongs_to :reply_id, optional: true
  belongs_to :relationship_id, optional: true
  belongs_to :favorite_id, optional: true
end
