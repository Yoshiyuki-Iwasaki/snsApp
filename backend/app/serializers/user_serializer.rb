# module Todos
  class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :image, :email, :password
  end
# end