class SessionsController < ApplicationController
	def new
		@user = User.new()
	end

	def create
		@user = User.find_by_credentials(params[:user][:username], params[:user][:password])
		if @user
			login
			head :ok
		else
			render :json => "Invalid username/password combination.", :status => 422
		end
	end

	def destroy
		@user = current_user
		@user.reset_session_token!
		params[:session_token] = nil

		redirect_to root_url
	end
end
