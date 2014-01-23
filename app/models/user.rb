class User < ActiveRecord::Base
  attr_accessible :username, :password_digest, :session_token, :email, 
  				  :currently_playing, :img_src, :password

  validates :username, :password_digest, :session_token, :presence => true
  validates :username, :session_token, :uniqueness => true
  validates :password, :presence => true, :on => :create
  validates :password, :length => {:minimum => 6}, :on => :create
  before_validation :reset_session_token, :on => :create

  has_many(:reviews)
  has_many(:comments)

  def password=(password)
  	@password = password
  	self.password_digest = BCrypt::Password.create(password)
  end

  def password
  	@password
  end

  def is_password?(password)
  	BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token
  	self.session_token = SecureRandom::urlsafe_base64
  end

  def reset_session_token!
  	reset_session_token
  	self.save!
  end

  def self.find_by_credentials(username, password)
  	user = User.where(:username => username).first
  	return user if user && user.is_password?(password)
  	nil
  end

end
