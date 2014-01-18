class Api::BoardgamesController< ApplicationController
	def show
		@boardgame = Boardgame.find(params[:id])

		render :json => @boardgame.to_json(:include => :reviews)
	end

	def update
		@boardgame = Boardgame.find(params[:id])
		@boardgame.update_attributes(:rating => @boardgame.average_rating.round(2))

		render :json => @boardgame
	end
end