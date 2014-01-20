class Removecolumnsfromboardgamesagain < ActiveRecord::Migration
  def change
  	remove_column :boardgames, :num_players
  	remove_column :boardgames, :total_rating
  end
end
