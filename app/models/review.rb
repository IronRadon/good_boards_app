class Review < ActiveRecord::Base
  attr_accessible :title, :body, :rating, :user_id, :boardgame_id
  validates :title, :body, :rating, :user_id, :boardgame_id, :presence => true

  belongs_to(:user)
  belongs_to(:boardgame)

  has_many(:comments)
end
