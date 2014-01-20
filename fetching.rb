require 'rest-client'
require 'addressable/uri'
require 'open-uri'
require 'nokogiri'


# puts "test name"
# name = gets.chomp

def getinfo(name)

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



