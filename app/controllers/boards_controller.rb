class BoardsController < ApplicationController
  def index
    @boards = Board.all

    respond_to do |format|
      format.html
      format.json { render json: @boards }
    end
  end
end
