class ChangeColumnsinBoardgames < ActiveRecord::Migration
  def up
  	add_column :boardgames, :yearpublished, :integer
  	add_column :boardgames, :playingtime, :integer
  	add_column :boardgames, :minplayers, :integer
  	add_column :boardgames, :maxplayers, :integer
  	add_column :boardgames, :boardgamepublisher, :string
  end

  def down
  	remove_column :boardgames, :num_players
  	remove_column :boardgames, :total_rating
  end
end
