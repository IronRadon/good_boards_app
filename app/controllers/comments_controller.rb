class CommentsController < ApplicationController
	
	def create
		params[:comment][:user_id] = current_user.id
		@comment = Comment.new(params[:comment])

		if @comment.save!
			render :json => @comment.to_json(:include => :user)
		else
			render :json => @comment.errors
		end

	end

	def index
		if params[:user_id]
			@user = User.find(params[:user_id])
			@comments = @user.comments
		else
			@boardgame = Boardgame.find(params[:boardgame_id])
			@comments = @boardgame.comments
		end
	end
end
