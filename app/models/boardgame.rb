class Boardgame < ActiveRecord::Base
  attr_accessible :title, :description, :rating, :website
  validates :title, :description, :rating, :presence => true
  validates :title, :uniqueness => true

  has_many(:reviews)
end
