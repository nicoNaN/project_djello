class BoardsController < ApplicationController
  def index
    @boards = Board.where("user_id = ?", current_user.id)

    respond_to do |format|
      format.html
      format.json { render json: @boards }
    end
  end
end
