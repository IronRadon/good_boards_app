require 'rest-client'
require 'addressable/uri'
require 'open-uri'
require 'nokogiri'


puts "test name"
name = gets.chomp

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

# result = Nokogiri::XML(open(id_search)).xpath('/boardgames/boardgame/description').text

#  test = HTMLEntities.new.decode(result) #this is what needs to go into the field value
#  	#some extra for description?
# puts test

result = Nokogiri::XML(open(id_search)).xpath('/boardgames/boardgame')

# test below will successfully return the info as strings
attrs = {}
test = %w(yearpublished playingtime minplayers maxplayers description image boardgamepublisher).each do |node|
	attrs[node] = result.at(node).text
end

result.search("name").each do |node|
	if node['primary']
		test << node.text
		break
	end
end



# test << title

p attrs


