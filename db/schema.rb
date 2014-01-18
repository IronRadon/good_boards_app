# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140118192400) do

  create_table "boardgames", :force => true do |t|
    t.string   "title",                         :null => false
    t.text     "description",                   :null => false
    t.float    "rating"
    t.string   "num_players"
    t.string   "website"
    t.datetime "created_at",                    :null => false
    t.datetime "updated_at",                    :null => false
    t.float    "total_rating", :default => 0.0
  end

  add_index "boardgames", ["rating"], :name => "index_boardgames_on_rating"
  add_index "boardgames", ["title"], :name => "index_boardgames_on_title", :unique => true

  create_table "categories", :force => true do |t|
    t.string   "title"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "categories", ["title"], :name => "index_categories_on_title", :unique => true

  create_table "comments", :force => true do |t|
    t.integer  "user_id",    :null => false
    t.integer  "review_id",  :null => false
    t.text     "body",       :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "comments", ["review_id"], :name => "index_comments_on_review_id"
  add_index "comments", ["user_id"], :name => "index_comments_on_user_id"

  create_table "reviews", :force => true do |t|
    t.integer  "user_id",      :null => false
    t.integer  "boardgame_id", :null => false
    t.string   "title",        :null => false
    t.text     "body",         :null => false
    t.integer  "rating",       :null => false
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  add_index "reviews", ["boardgame_id"], :name => "index_reviews_on_boardgame_id"
  add_index "reviews", ["user_id"], :name => "index_reviews_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "username",          :null => false
    t.string   "password_digest",   :null => false
    t.string   "session_token",     :null => false
    t.string   "email"
    t.string   "currently_playing"
    t.string   "img_src"
    t.datetime "created_at",        :null => false
    t.datetime "updated_at",        :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email"
  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

end
