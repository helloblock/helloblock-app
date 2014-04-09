class SessionsController < ApplicationController

  def create
    reset_session()
    authenticate
  end

  def destroy
    reset_session()
    render json: {
      status: "success"
    }, status: 200
  end

  def authenticate
    if session[:uid]
      render json: {
        status: "success"
      }, status: 200
      return
    end

    if !params["email"] || !params["password"]
      render json: {
        status: "fail"
      }, status: 401
      return
    end

    @response = HTTParty.post("#{ENV["AUTH_HOST"]}/users/authenticate",
      body: {
        email: params["email"],
        password: params["password"]
      }
    )

    if @response.code > 200
      render json: {
        status: "fail"
      }, status: 401
      return
    end

    session[:uid] = @response["data"]["uid"]
    render json: @response.to_hash, status: @response.code
  end
end
