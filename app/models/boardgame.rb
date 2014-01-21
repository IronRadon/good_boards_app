require 'open-uri'
class Boardgame < ActiveRecord::Base
  extend FriendlyId
  friendly_id :title, :use => :slugged
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

  def self.get_info(name)

  search = Addressable::URI.new(
    :scheme => "http",
    :host => "boardgamegeek.com",
    :path => "/xmlapi/search",
    :query_values => {
      :search => "#{name}",
      :exact => 1
      }).to_s

  id = Nokogiri::XML(open(search)).xpath('/boardgames/boardgame/@objectid').last.value

  id_search = Addressable::URI.new(
    :scheme => "http",
    :host => "boardgamegeek.com",
    :path => "/xmlapi/boardgame/#{id}").to_s

  result = Nokogiri::XML(open(id_search)).xpath('/boardgames/boardgame')

  attrs = {}
  test = %w(yearpublished playingtime minplayers maxplayers description image boardgamepublisher).each do |node|
    attrs[node] = result.at(node).text
  end

  result.search("name").each do |node|
    if node['primary']
      attrs["title"] = node.text
      break
    end
  end

  return attrs
end


end
