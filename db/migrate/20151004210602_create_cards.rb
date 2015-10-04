class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.integer :list_id
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
