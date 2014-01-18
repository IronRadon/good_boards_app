class AddRatingSumtoBoardgameTable < ActiveRecord::Migration
  def up
  	add_column :boardgames, :total_rating, :float, :default => 0
  end

  def down
  	change_column :boardgames, :rating, :float
  end
end
