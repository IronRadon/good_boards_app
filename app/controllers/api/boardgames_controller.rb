class Api::BoardgamesController< ApplicationController
	def show
		@boardgame = Boardgame.find(params[:id])

		render :json => @boardgame.to_json(:include => :reviews)
	end

	# def update
	# 	@boardgame = Boardgame.find(params[:id])
	
	# 	if params[:review_id]
	# 		@boardgame.total_rating = @boardgame.total_rating - params[:old_rating] + params[:rating].to_f
	# 		new_total = @boardgame.total_rating
	# 	else
	# 		@boardgame.total_rating = @boardgame.total_rating + params[:rating].to_f
	# 		new_total = @boardgame.total_rating
	# 	end
	
	# 	@boardgame.rating = (@boardgame.average_rating).round(2)
	# 	@boardgame.update_attributes(:total_rating => new_total)

	# 	render :json => @boardgame

	# end

	def update
		@boardgame = Boardgame.find(params[:id])
		@boardgame.update_attributes(:rating => @boardgame.average_rating.round(2))

		render :json => @boardgame
	end
end