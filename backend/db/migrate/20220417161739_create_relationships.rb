class CreateRelationships < ActiveRecord::Migration[6.1]
  def change
    create_table :relationships do |t|
      t.references :following, null: false
      t.references :follower, null: false

      t.timestamps
    end
    add_foreign_key :relationships, :users, column: :following_id
    add_foreign_key :relationships, :users, column: :follower_id
  end
end