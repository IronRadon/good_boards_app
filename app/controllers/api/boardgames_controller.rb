class Api::BoardgamesController< ApplicationController
	def show
		@boardgame = Boardgame.find(params[:id])

		render :json => @boardgame.to_json(:include => :reviews)
	end
end