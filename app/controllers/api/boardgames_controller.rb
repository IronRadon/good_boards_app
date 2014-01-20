class Api::BoardgamesController< ApplicationController

	def show
		@boardgame = Boardgame.where(:id => params[:id]).first

		if @boardgame
			render :json => @boardgame.to_json(:include => :reviews)
		else
			@boardgame = Boardgame.where(:slug => params[:id].slugify).first
			if @boardgame
				render :json => @boardgame.to_json(:include => :reviews)
			else
				render :json => params[:id]
			end
		end
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
