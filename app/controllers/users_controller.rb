class UsersController < ApplicationController
  def create
    reset_session()
    response = Authenticator::User.create(
      email: params["user"]["email"],
      password: params["user"]["password"])

    body = JSON.parse(response.body)

    if response.code >= 300
      render json: body, status: response.code
    end

    if response.code == 200
      session[:uid] = body["data"]["uid"]
      render json: body, status: response.code
    end
  end
end
