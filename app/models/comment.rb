class Comment < ActiveRecord::Base
  attr_accessible :body, :user_id, :review_id
  validates :body, :user_id, :review_id, :presence => true

  belongs_to(:user)
  belongs_to(:review)
end
