class BoardsController < ApplicationController
  def index
    @boards = current_user.boards

    respond_to do |format|
      format.html
      format.json { render json: @boards }
    end
  end

  def destroy
    @board = Board.find_by_id(params[:id])

    respond_to do |format|
      if @board.destroy
        format.json { render json: @board }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end
end
