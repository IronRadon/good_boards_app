class Boardgame < ActiveRecord::Base
  attr_accessible :title, :description, :rating, :website, :total_rating
  validates :title, :description, :rating, :presence => true
  validates :title, :uniqueness => true

  has_many(:reviews)

  def average_rating 
  	self.total_rating / (self.reviews.all.count)
  end


end
