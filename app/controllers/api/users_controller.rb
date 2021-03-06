class Api::UsersController < ApplicationController
	# before_filter :check_authorization, :only => [:show]
	def create
		@user = User.new(params[:user])
		if @user.save
			login
			render :json => @user
		else
			render :json=>  @user.errors.full_messages
		end
	end

	def new
		@user = User.new
	end

	def show
		@user = User.find(params[:id])

		render :json => @user.to_json(:include => [:reviews, :comments])
	end

	def update
		@user = current_user
		@user.update_attributes!(params[:user])

		render :json => @user.to_json(:include => [:reviews, :comments])
	end
end