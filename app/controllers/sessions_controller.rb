class SessionsController < ApplicationController

  def new

  end

  def create
    user = User.where(email: "")

    if !user
      # Redirect to sign up
      return false
    end

    if !user.authenticate(params[:session][:password])
      # Wrong password
      return false
    end

    user.generate_token
    # cookies.permanent[:remember_token] = remember_token
    session[:remember_token] = user.remember_token

    return true

  end

  def destroy

  end
end
