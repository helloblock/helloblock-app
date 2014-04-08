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

    def update(opts = {})
      HTTParty.post("#{ENV["AUTH_HOST"]}/users/password",
        body: {
          uid: opts[:uid],
          password: opts[:password],
          newPassword: opts[:newPassword]
        }
      )
    end

    module Token
      def reset(opts)
        HTTParty.post("#{ENV["AUTH_HOST"]}/users/tokens/reset", body: {
          uid: opts[:uid],
          password: opts[:password]
        })
      end
    end
  end

end
