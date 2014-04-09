Helloblock::Application.routes.draw do
  root to: "application#index"

  resources :sessions, only: [:create, :destroy]
  post "/sessions/authenticate" => "sessions#authenticate"

  get "/users/tokens" => "users#tokens"
  put "/users/tokens" => "users#tokens_put"
  put "/users" => "users#update"
  post "/users" => "users#create"

  post "/email" => "application#save_email"

  # Static Assets normally served before this
  # By the time it hits this, it's too late, unfound
  get "/templates" => "application#unfound_assets"
  get "/templates/*all" => "application#unfound_assets"

  # All other routes to redirect to angular
  get "*path" => "application#index"
end
