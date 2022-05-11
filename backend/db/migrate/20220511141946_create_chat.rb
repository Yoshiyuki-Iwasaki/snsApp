class CreateChat < ActiveRecord::Migration[6.1]
  def change
    create_table :chats do |t|
      t.references :poster, null: false
      t.references :posted, null: false
      t.string :content

      t.timestamps
    end

    add_foreign_key :chats, :users, column: :poster_id
    add_foreign_key :chats, :users, column: :posted_id
  end
end
