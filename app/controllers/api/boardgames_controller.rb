class Api::BoardgamesController< ApplicationController

	def show
		#find will immediately explode if no record is found
		@boardgame = Boardgame.find_by_id(params[:id])

		if @boardgame
			render :json => @boardgame.to_json(:include => :reviews)
		else
			@boardgame = Boardgame.where(:slug => params[:id].slugify).first

			if @boardgame
				render :json => @boardgame.to_json(:include => :reviews)
			else
				info = Boardgame::get_info(params[:id])
				render :json => info
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
