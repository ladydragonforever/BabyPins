class Api::SessionsController < ApplicationController
    def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    # Flash errors, if any.
    # Render :new if invalid credentials (give the user another chance to login)
    if @user.nil?
        render json: ["Invalid credentials!"] , status: 401
    else
        # Log them in and redirect them if we find them
        login!(@user)
        render "api/users/show.json.jbuilder"
    end

    end
    def destroy
        if current_user
            logout! 
            render json: {}
        else
            render json: ["No user to be checked out"], status: 404
        end
    end
end
