GoodBoards
======

This is a light clone of GoodReads for boardgames. Users can review boardgames, rate them on a star-rating scale of 1-5, and comment on reviews. 

###Highlights

**Typeahead Search:** As a user types in a boardgame title, the searchbar dropdown will make suggestions based on the letters typed so far. A user can either select the desired entry by clicking on the title or by hitting `TAB` to auto-complete. `ENTER` will execute the search.

**Dynamic Scraping:** If a boardgame is searched for that does not exist in the database, the app will dynamically scrape for the information and add it to the database while rendering a view to create smooth user experience.

**URL-Search:** For any boardgame title typed after the `#boardgames/` in the url, the app will search and bring up the boardgame information. The url-search is case insensitive and will handle any number of whitespaces between words.

Both the searches and scrape work in conjunction through heavy modification of the Twitter typeahead library and the FriendlyURI gem. 

**Single-Page:** The Backbone.js framework is used to create a fully single page application, from sign in to sign out. The navigation bar view contains its own logic to create a smooth rendering experience upon sign in/sign out.

###Technologies and Languages used:
* Ruby/Rails, in particular Nokogiri, FriendlyURI
* Javascript
* Backbone.js
* PostgreSQL
* Bootstrap


###A Note on Databases:
This application uses PostgreSQL. In addition, the standard `database.yml` file has been renamed to `example_database.yml`. In order to run the application on your local machine, clone or fork the repo and first rename the example file to `database.yml`. 

####For Postgres:
Update the username and password to your postgres credentials

####For SQLite3:
 In the `database.yml` file:

Change your development set to look similar to the section below. If you need a production and test environment, configure them accordingly.

```
development:
  adapter: sqlite3
  database: db/development.sqlite3
  pool: 5
  timeout: 5000
```


In the `Gemfile`:

Remove `gem 'pg'` and replace it with: ` gem 'sqlite3'`