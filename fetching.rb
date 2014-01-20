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


id = Nokogiri::XML(open(search)).xpath('/boardgames/boardgame/@objectid').first.value

id_search = Addressable::URI.new(
	:scheme => "http",
	:host => "boardgamegeek.com",
	:path => "/xmlapi/boardgame/#{id}").to_s

p id
p id_search
result = Nokogiri::XML(open(id_search)).xpath('/boardgames/boardgame/description').text

test = HTMLEntities.new.decode(result)
puts test

