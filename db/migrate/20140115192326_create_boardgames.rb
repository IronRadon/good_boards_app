class CreateBoardgames < ActiveRecord::Migration
  def change
    create_table :boardgames do |t|
    	t.string :title, :null => false
    	t.text :description, :null => false
    	t.float :rating
    	t.string :num_players
    	t.string :website

      t.timestamps
    end
    add_index :boardgames, :title, :unique => true
    add_index :boardgames, :rating
  end
end
