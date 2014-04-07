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

  def validate
    authenticate_user!
  end

  protected

  def authenticate_user!
    if session[:uid]
      render json: {
        status: "success"
      }, status: 200
      return
    end

    if !params["email"] && !params["password"]
      render json: {
        status: "fail"
      }, status: 401
      return
    end

    response = Authenticator::User.authenticate(
      email: params["email"],
      password: params["password"]
    )

    render json: response.body, status: response.code
  end
end
