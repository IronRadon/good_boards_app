class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
    	t.integer :user_id, :null => false
    	t.integer :boardgame_id, :null => false
    	t.string :title, :null => false
    	t.string :body, :null => false
    	t.integer :rating, :null => false

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :boardgame_id
  end
end
