class Api::PinsController < ApplicationController

    def create
        @board = Board.find(params[:id])
        @picture = Picture.find(params[:boards][:picture_id])
        @pin = Pin.create!(board_id: @board.id, picture_id: @picture.id)
        if @pin
            render json:[status: "pinned"]
        else
            render json: @pin.errors.full_messages, status: 422 
        end
    end

    def delete
        
        @board = Board.find(params[:id])

        if current_user.id != @board.user_id
            render json: ["Unauthorized user!"]
        end

        @picture = Picture.find(params[:boards][:picture_id])
        @pin = Pin.find_by(board_id: @board.id, picture_id: @picture.id)
        
        if @pin
            @pin.delete
        else
            render json: @pin.errors.full_messages, status: 422 
        end
    end

    private
    def pin_params
        params.require(:pins).permit(:picture_id)
    end

end
