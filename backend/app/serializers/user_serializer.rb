# module Users
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :image, :email, :password, :created_at
  end
# end