class AddIdColumntoCategories < ActiveRecord::Migration
  def up
  	add_column :categories, :bgg_id, :integer
  end

  def down
  end
end
