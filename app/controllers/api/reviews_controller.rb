class Api::ReviewsController < ApplicationController
	before_filter :check_authorization, :only => [:create, :update]
	def index
		if params[:user_id]
			@user = User.find(params[:user_id])
			@reviews = @user.reviews
		else
			@boardgame = Boardgame.find(params[:boardgame_id])
			@reviews = @boardgame.reviews
		end

		render :json => @reviews
	end

	def show
		@review = Review.find(params[:id])

		render :json => @review.to_json(:include => [:user, :boardgame, {:comments => {:include => :user}}])
	end

	def create
		params[:review][:user_id] = current_user.id
		p params
		@review = Review.new(params[:review])

		if @review.save
			render :json => @review
		else
			render :json => @review.errors
		end
	end

	def update
		@review = Review.find(params[:id])
		@review.update_attributes!(params[:review])
		@boardgame = @review.boardgame
		@boardgame.update_attributes!(:rating => @boardgame.average_rating.round(2))
		render :json => @review.to_json(:include => [:boardgame])
	end
end
