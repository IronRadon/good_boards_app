class Boardgame < ActiveRecord::Base
  attr_accessible :title, :description, :rating, :website, :image, :boardgamepublisher,
                  :yearpublished, :playingtime, :minplayers, :maxplayers
  validates :title, :description, :rating, :presence => true
  validates :title, :uniqueness => true

  has_many(:reviews)

  def average_rating
  	total_score = 0.0
  	self.reviews.each do |review|
  		total_score += review.rating
  	end

    total_score/ self.reviews.count
  end


end
