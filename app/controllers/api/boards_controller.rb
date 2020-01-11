class Api::BoardsController < ApplicationController
    def index
        @boards = Board.all
    end
    
    def show
        @board = Board.find(params[:id])
        if current_user.id == @board.user_id
            render :show
        else
            render json: ["Unauthorized user!"], status: 401
        end
        
    end

    def create
        bp =board_params
        bp[:user_id] = current_user.id
        @board = Board.new(bp)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        @board = Board.find(params[:id])

        if current_user.id != @board.user_id
            render json: ["Unauthorized user!"]
        end

        if @board.update(board_params) 
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end


    def destroy
        @board = Board.find(params[:id])
        
        if current_user.id != @board.user_id
            render json: ["Unauthorized user!"]
        end

        if @board.destroy
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end

    end

    private

    def board_params
        params.require(:boards).permit(:title, :description)
    end



end
