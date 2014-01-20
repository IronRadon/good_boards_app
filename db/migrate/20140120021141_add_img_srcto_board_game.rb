class AddImgSrctoBoardGame < ActiveRecord::Migration
  def up
  	add_column :boardgames, :img_src, :string
  	change_column :boardgames, :rating, :float, :default => 0.0
  end

  def down
  end
end
