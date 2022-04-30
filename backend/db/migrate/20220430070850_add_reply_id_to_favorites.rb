class AddReplyIdToFavorites < ActiveRecord::Migration[6.1]
  def change
    add_reference :favorites, :reply, foreign_key: true
  end
end
