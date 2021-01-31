class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :type_of
      t.references :universe, null: false, foreign_key: true
      t.string :description

      t.timestamps
    end
  end
end
