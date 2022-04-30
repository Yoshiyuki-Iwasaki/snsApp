class Favorite < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :todo, optional: true
  belongs_to :reply, optional: true
end
