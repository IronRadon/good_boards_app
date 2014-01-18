class RemoveRatingfromBoardgameTable < ActiveRecord::Migration
  def up
  end

  def down
  	delete_column :boardgames, :rating
  end
end
