class TodoSerializer < ActiveModel::Serializer
  attributes :id, :name, :completed, :created_at
  belongs_to :user
end
