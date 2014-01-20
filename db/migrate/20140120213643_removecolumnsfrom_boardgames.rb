class RemovecolumnsfromBoardgames < ActiveRecord::Migration
  def up
  end

  def down
  	remove_column :boardgames, :num_players, :string
  	remove_column :boardgames, :total_rating, :float
  end
end
