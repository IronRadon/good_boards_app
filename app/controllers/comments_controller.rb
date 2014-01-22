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

	# def index
	# 	@comments = Comment.where(:review_id => params[:review_id])

	# 	render :json => @comments.to_json(:include => :user)
	# end
end
