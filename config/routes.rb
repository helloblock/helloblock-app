Helloblock::Application.routes.draw do
  root to: "application#index"

  get "*path" => "application#index"
end
