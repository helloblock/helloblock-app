module Authenticator
  extend self

  AUTH_SECRET = ENV["AUTH_SECRET"]

  def create

  end

  def validate(opts = {})
    return false
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
