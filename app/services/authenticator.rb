module Authenticator
  extend self

  AUTH_SECRET = ENV["AUTH_SECRET"]

  def create
    AUTH_SECRET
  end

  def validate(opts = {})
    return true
  end

  module Token
    extend self

    def create(opts = {})
      return "token-#{SecureRandom.urlsafe_base64}"
    end

    def validate(token)
      return true
    end

    def destroy
      return true
    end
  end

end
