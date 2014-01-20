class AddFriendlytoBoardgames < ActiveRecord::Migration
  def up
  	add_column :boardgames, :slug, :string
  	add_index :boardgames, :slug, :unique => true
  end

  def down
  end
end
