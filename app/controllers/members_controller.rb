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

  def create
    @card = Card.find_by_id(params[:card_id])
    @member = User.find_by_id(params[:_json])

    respond_to do |format|
      if @card.save
        @card.members << @member
        format.json { render json: @card.members }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

  def destroy
    @card = Card.find_by_id(params[:card_id])
    @member = @card.members.find_by_id(params[:id])

    respond_to do |format|
      if @member.destroy
        format.json { render json: @card.members }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

end
