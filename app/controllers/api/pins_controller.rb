class Api::PinsController < ApplicationController

    def create
        @board = Board.find(params[:board_id])
        @picture = Picture.find(pin_params[:picture_id])
        @pin = Pin.create!(board_id: @board.id, picture_id: @picture.id)
        if @pin
            render json:[status: "pinned"]
        else
            render json: @pin.errors.full_messages, status: 422 
        end
    end

    def destroy
        
        @board = Board.find(params[:board_id])

        if current_user.id != @board.user_id
            render json: ["Unauthorized user!"]
        end

        @pin = Pin.find(params[:id])
        
        if @pin
            @pin.destroy 
            # need to delete all the associations as well
            render json: [status: "pin deleted"], status: 200
        else
            render json: @pin.errors.full_messages, status: 422 
        end
    end

    private
    def pin_params
        params.require(:pins).permit(:picture_id)
    end

end
