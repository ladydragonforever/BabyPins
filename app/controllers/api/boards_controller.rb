class Api::BoardsController < ApplicationController
    def index
    @boards = Board.all
    end
    
    def show
        @board = Board.find(params[:id])
        if current_user.id == @board.user_id
            render :show, status: 200
        else
            render json: ["Unauthorized user!"], status: 401
        end
        
    end

    def create
        bp =board_params
        bp[:user_id] = current_user.id
        @board = Board.new(bp)
        if @board.save
            render :show, status: 200
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        @board = Board.find(params[:id])

        if current_user.id != @board.user_id
            render json: ["Unauthorized user!"]
        end
        bp =board_params
        bp[:user_id] = current_user.id

        if @board.update(bp) 
            render :show, status: 200
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
            render :show, status: 200
        else
            render json: @board.errors.full_messages, status: 422
        end

    end

    private

    def board_params
        params.require(:board).permit(:title, :description)
    end



end
