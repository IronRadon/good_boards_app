class SessionsController < ApplicationController
	def new
		@user = User.new()
	end

	def create
		@user = User.find_by_credentials(params[:user][:username], params[:user][:password])
		if @user
			login
			redirect_to user_url(@user)
		else
			render :json => "Invalid username/password combination."
		end
	end

	def destroy
		@user = current_user
		@user.reset_session_token!
		params[:session_token] = nil

		render :json => @user
	end
end
