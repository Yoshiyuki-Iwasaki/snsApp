class Notification < ApplicationRecord
  self.inheritance_column = :_type_disabled # この行を追加
  belongs_to :visiter, class_name: 'User', optional: true
  belongs_to :visited, class_name: 'User', optional: true
  belongs_to :todo, optional: true
end