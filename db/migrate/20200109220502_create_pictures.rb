class CreatePictures < ActiveRecord::Migration[5.2]
  def change
    create_table :pictures do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.string :description

      t.timestamps
    end

    add_index :pictures, :title, unique: true
  end
end
