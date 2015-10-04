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

  def create
    @board = Board.find_by_id(params[:board_id])
    @list = @board.lists.create(whitelisted_list_params)

    respond_to do |format|
      if @list.save
        format.json { render json: @list }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  private

  def whitelisted_list_params
    params.require(:list).permit(:title, :description)
  end
end
