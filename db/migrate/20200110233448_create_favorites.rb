class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.integer :picture_id, null: false
      t.integer :board_id, null: false

      t.timestamps
    end

    add_index :pins, [:picture_id, :board_id], unique: true
  end
end
