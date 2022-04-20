class RemovecompletedFromTodos < ActiveRecord::Migration[6.1]
  def up
    remove_column :todos, :completed
      end

  def down
    add_column :todos, :completed, :boolean
  end
end
