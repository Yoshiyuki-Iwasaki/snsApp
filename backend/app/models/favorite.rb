class Favorite < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :post, optional: true
  belongs_to :reply, optional: true
end
