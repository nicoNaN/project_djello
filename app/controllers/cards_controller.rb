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
    @card.members << current_user
    @card.activities.create(content: "#{current_user.email} created this card on #{@card.created_at.strftime('%b %-d, %Y')}")

    respond_to do |format|
      if @card.save
        format.json { render json: @card }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  def update
    @card = Card.find_by_id(params[:id])

    if params[:title] != @card.title
      @card.activities.create(content: "#{current_user.email} changed the title of this card to #{params[:title]} on #{Time.now.strftime('%b %-d, %Y')}")
    end

    if params[:description] != @card.description
      @card.activities.create(content: "#{current_user.email} changed the description of this card to #{params[:description]} on #{Time.now.strftime('%b %-d, %Y')}")
    end

    respond_to do |format|
      if @card.update(whitelisted_card_params)
        format.json { render json: @card }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  private

  def whitelisted_card_params
    params.require(:card).permit(:title, :description, :list_id, :user_id)
  end

end
