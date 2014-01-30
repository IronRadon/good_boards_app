GoodBoards
======

This is a light clone of GoodReads for boardgames. Users can review boardgames, rate them on a star-rating scale of 1-5, and comment on reviews. If a boardgame is searched for that does not exist, the app will dynamically scrape for the information and add it to the database while rendering a view to create smooth user experience. 
The search functionality combines heavy modification of Twitter typeahead along with the FriendlyURI library to differentiate between titles that must be scraped vs titles that currently exist.

Technologies and Languages used:
-----
*Ruby/Rails, in particular Nokogiri, FriendlyURI
*Backbone.js
*PostgreSQL
*Bootstrap

A Note on Databases:
This application uses PostgreSQL. In order to clone the repository and utilize it without needing to install PostgreSQL, modify the _database.yml_ accordingly.
