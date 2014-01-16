class ReviewsController < ApplicationController
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
end
