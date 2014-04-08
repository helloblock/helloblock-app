class UsersController < ApplicationController
  def create
    reset_session()
    response = Authenticator::User.create(
      email: params["user"]["email"],
      password: params["user"]["password"])

    if response.code > 300
      render json: response.to_hash, status: response.code
    end

    if response.code == 200
      session[:uid] = response["data"]["uid"]
      render json: response.to_hash, status: response.code
    end
  end

  def update
    response = Authenticator::User.update(
      password: params["user"]["password"],
      newPassword: params["user"]["newPassword"],
      uid: session[:uid]
    )

    if response.code > 300
      render json: response.to_hash, status: response.code
    end

    if response.code == 200
      session[:uid] = response["data"]["uid"]
      render json: response.to_hash, status: response.code
    end
  end
end
