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


result = Nokogiri::XML(open(search)).xpath('/boardgames/boardgame/@objectid').first.value

puts result

