class BoardsController < ApplicationController
  def index
    @boards = current_user.boards

    respond_to do |format|
      format.html
      format.json { render json: @boards }
    end
  end
end
