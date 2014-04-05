class UsersController < ApplicationController
  def create
    response = Authenticator::User.create(
      email: params["session"]["email"],
      password: params["session"]["password"])

    render json: response.body, status: response.code
  end
end
