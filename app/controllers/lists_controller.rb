class ListsController < ApplicationController
  def index
    @board = Board.find_by_id(params[:board_id])

    respond_to do |format|
      if @board
        @lists = @board.lists
        format.json { render json: @lists }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end
end
