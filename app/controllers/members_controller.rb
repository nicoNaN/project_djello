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
    @board = Board.find_by_id(params[:board_id])
    @card = Card.find_by_id(params[:card_id])
    @member = User.find_by_id(params[:_json])

    respond_to do |format|
      if @card.save
        @card.members << @member
        @member.boards << @board
        @card.activities.create(content: "#{current_user.email} added #{@member.email} to this card on #{@member.created_at.strftime('%b %-d, %Y')}")
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
        @card.activities.create(content: "#{current_user.email} removed #{@member.email} from this card on #{Time.now.strftime('%b %-d, %Y')}")
        format.json { render json: @card.members }
      else
        format.json { render nothing: true, status: 404 }
      end
    end
  end

end
