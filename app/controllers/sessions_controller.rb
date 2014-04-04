class SessionsController < ApplicationController

  def signup
    user = Authenticator.create(
      email: params["email"],
      password: params["password"])

    # Error

    # Success
    return render json: {

      }. status: 200
  end

  def create
    reset_session

    # Auth
    user_valid = Authenticator.validate(email: "")

    if !user_valid
      # Redirect to sign up
      return render json: {
        status: "fail",
        message: "Wrong username or password"
      }, status: 401
    end

    user_token = Authenticator::Token.create(
      email: params["email"],
      password: params["password"])

    session[:user_token] = user_token

    return render json: {
      status: "success"
    }, status: 200

  end

  def validate
    user_token = Authenticator::Token.validate(session[:user_token])

    if !user_token
      return render json: {
        status: "fail",
        message: "Token invalid or expired"
      }, status: 401
    end

    return render json: {
      status: "success"
    }, status: 200

  end

  def destroy
    Authenticator::Token.destroy(session[:user_token])
    reset_session

    return render json: {
      status: "success"
    }, status: 200
  end

  def debug
    ap session.to_hash
    render json: {
      session: session
    }
  end
end
