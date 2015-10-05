class CardsController < ApplicationController

  def index
    @board = Board.find_by_id(params[:board_id])

    respond_to do |format|
      if @board
        @cards = @board.lists.find_by_id(params[:list_id]).cards
        format.json { render json: @cards }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  def show
    @card = Card.find_by_id(params[:id])

    respond_to do |format|
      if @card
        format.json { render json: @card }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  def create
    @board = Board.find_by_id(params[:board_id])
    @list = @board.lists.find_by_id(params[:list_id])
    @card = @list.cards.create(whitelisted_card_params)

    respond_to do |format|
      if @card.save
        format.json { render json: @card }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  private

  def whitelisted_card_params
    params.require(:card).permit(:title, :description)
  end

end
