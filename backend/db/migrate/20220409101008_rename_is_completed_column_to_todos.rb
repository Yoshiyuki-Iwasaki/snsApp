class RenameIsCompletedColumnToTodos < ActiveRecord::Migration[6.1]
  def change
     rename_column :todos, :is_completed, :completed
  end
end
