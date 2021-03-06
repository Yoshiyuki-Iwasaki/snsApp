class CreateNotifications < ActiveRecord::Migration[6.1]
  def change
    create_table :notifications do |t|
      t.bigint :url, default: ''
      t.references :visiter, null: false
      t.references :visited, null: false
      t.references :post, foreign_key: true
      t.string :type, default: '', null: false
      t.boolean :checked, default: false, null: false

      t.timestamps
    end
    add_foreign_key :notifications, :users, column: :visiter_id
    add_foreign_key :notifications, :users, column: :visited_id
  end
end
