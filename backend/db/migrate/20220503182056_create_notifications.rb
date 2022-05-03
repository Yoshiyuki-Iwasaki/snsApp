class CreateNotifications < ActiveRecord::Migration[6.1]
  def change
    create_table :notifications do |t|
      t.integer :visiter_id
      t.integer :visited_id
      t.references :todo, null: false, foreign_key: true
      t.references :reply, null: false, foreign_key: true
      t.references :relationship, null: false, foreign_key: true
      t.references :favorite, null: false, foreign_key: true
      t.string :action
      t.boolean :checked

      t.timestamps
    end
  end
end
