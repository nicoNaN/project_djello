class MembersController < ApplicationController

  def index
    @card = Card.find_by_id(params[:card_id])

    respond_to do |format|
      if @card
        format.json { render json: @card.members }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

end
