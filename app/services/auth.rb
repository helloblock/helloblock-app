module Auth
  include HTTParty
  headers 'auth-secret' => ENV["AUTH_SECRET"]
  base_uri ENV["AUTH_HOST"]
end
