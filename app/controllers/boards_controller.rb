class BoardsController < ApplicationController
  def index
    @boards = current_user.boards

    respond_to do |format|
      format.html
      format.json { render json: @boards }
    end
  end

  def show
    @board = Board.find_by_id(params[:id])

    respond_to do |format|
      if @board
        format.json { render json: @board }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  def create
    @board = current_user.boards.create(whitelisted_board_params)

    respond_to do |format|
      if @board.save
        format.json { render json: @board }
      else
        format.json { render nothing: true, status: 404 }
      end
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

  private

  def whitelisted_board_params
    params.require(:board).permit(:title)
  end
end
