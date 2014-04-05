module Authenticator
  extend self

  AUTH_HOST = ENV["AUTH_HOST"]
  # TODO
  # AUTH_SECRET = ENV["AUTH_SECRET"]

  module User
    extend self

    def create(opts = {})
      HTTParty.post("#{AUTH_HOST}/users", body: {
        email: opts[:email],
        password: opts[:password]
      })
    end

    def authenticate(opts = {})
      HTTParty.post("#{AUTH_HOST}/users/authenticate", body: {
        email: opts[:email],
        password: opts[:password]
      })
    end
  end

end
