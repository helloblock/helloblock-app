class UsersController < ApplicationController
  def create
    reset_session()

    mirror(:post, "/users", body: {
      email: params["user"]["email"],
      password: params["user"]["password"]
    }) do |response|
      session[:uid] = response["data"]["uid"]
    end
  end

  def update
    mirror(:put, "/users", body: {
      uid: session[:uid],
      password: params["user"]["password"],
      newPassword: params["user"]["newPassword"]
    })
  end

  def tokens
    mirror(:get, "/users/tokens", query: {
      uid: session[:uid],
    })
  end

  def tokens_put
    mirror(:put, "/users/tokens", body: {
      uid: session[:uid],
    })
  end

  private

  def mirror(method, resource, opts)
    response = Auth.send(method, resource, opts)

    if response.code > 300
      render json: response, status: response.code
    end

    if response.code == 200
      yield response if block_given?
      render json: response, status: response.code
    end
  end


end
