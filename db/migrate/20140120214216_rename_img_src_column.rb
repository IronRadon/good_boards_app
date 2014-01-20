class RenameImgSrcColumn < ActiveRecord::Migration
  def up
  	rename_column :boardgames, :img_src, :image
  end

  def down
  end
end
