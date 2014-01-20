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

	def index
		@boardgames = Boardgame.all

		@boardgames = @boardgames.map do |boardgame|
			{:id => boardgame.id, :title => boardgame.title}
		end

		render :json => @boardgames
	end
end
