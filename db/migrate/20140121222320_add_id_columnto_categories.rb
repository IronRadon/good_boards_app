class AddIdColumntoCategories < ActiveRecord::Migration
  def up
  	add_column :categories, :bgg_id
  end

  def down
  end
end
