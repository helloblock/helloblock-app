module Authenticator
  extend self

  # TODO
  # AUTH_SECRET = ENV["AUTH_SECRET"]

  module User
    extend self

    def create(opts = {})
      HTTParty.post("#{ENV["AUTH_HOST"]}/users",
        body: {
          email: opts[:email],
          password: opts[:password]
        }
      )
    end

    def authenticate(opts = {})
      HTTParty.post("#{ENV["AUTH_HOST"]}/users/authenticate",
        body: {
          email: opts[:email],
          password: opts[:password]
        }
      )
    end

    module Token
      def change(opts)
        HTTParty.post("#{ENV["AUTH_HOST"]}/users/#{opts[:uid]}/tokens", body: {
          password: opts[:password]
        })
      end
    end
  end

end
