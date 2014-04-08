class UsersController < ApplicationController
  def create
    reset_session()

    response = HTTParty.post("#{ENV["AUTH_HOST"]}/users",
      body: {
        email: params["user"]["email"],
        password: params["user"]["password"]
      }
    )

    if response.code > 300
      render json: response.to_hash, status: response.code
    end

    if response.code == 200
      session[:uid] = response["data"]["uid"]
      render json: response.to_hash, status: response.code
    end
  end

  def update
    response = HTTParty.post("#{ENV["AUTH_HOST"]}/users/password",
      body: {
        uid: session[:uid],
        password: params["user"]["password"],
        newPassword: params["user"]["newPassword"]
      }
    )

    if response.code > 300
      render json: response.to_hash, status: response.code
    end

    if response.code == 200
      render json: response.to_hash, status: response.code
    end
  end

  def tokens
    response = HTTParty.get("#{ENV["AUTH_HOST"]}/tokens", query: {
      uid: session[:uid]
    })

    if response.code > 300
      render json: response.to_hash, status: response.code
    end

    if response.code == 200
      render json: response.to_hash, status: response.code
    end

  end

  def reset_tokens
    response = HTTParty.post("#{ENV["AUTH_HOST"]}/users/tokens/reset", body: {
      uid: session[:uid],
      password: params["password"]
    })

    if response.code > 300
      render json: response.to_hash, status: response.code
    end

    if response.code == 200
      render json: response.to_hash, status: response.code
    end
  end
end
