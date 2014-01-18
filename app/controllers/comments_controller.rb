class CommentsController < ApplicationController
	
	def create
		params[:comment][:user_id] = current_user.id
		@comment = Comment.new(params[:comment])

		if @comment.save!
			render :json => @comment
		else
			render :json => @comment.errors
		end

	end
end
