class ChangeColumnTypeInReviews < ActiveRecord::Migration
  def up
  	change_column :reviews, :bodyrails c, :text
  end

  def down
  	change_column :reviews, :body, :string
  end
end
