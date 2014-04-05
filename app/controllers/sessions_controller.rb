class SessionsController < ApplicationController

  def create
    reset_session
    authenticate_user!
    session[:uid] = @user[:uid]

    render json: {
      status: "success"
    }, status: 200

  end

  def destroy
    reset_session
    render json: {
      status: "success"
    }, status: 200
  end

  protected

  def authenticate_user!
    return if session[:uid]

    response = Authenticator::User.authenticate(
      email: params["email"],
      password: params["password"]
    )

    render json: response.body, status: response.code
  end
end
