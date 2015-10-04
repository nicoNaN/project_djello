class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.integer :board_id
      t.string :title
      t.string :description

      t.timestamps null: false
    end
  end
end
