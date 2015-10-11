class ActivitiesController < ApplicationController

  def index
    @card = Card.find_by_id(params[:card_id])

    respond_to do |format|
      if @card.activities
        format.json { render json: @card.activities }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

end
