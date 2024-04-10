Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  match "/404", to: "system#not_found", via: :all
  match "/500", to: "system#error", via: :all

  # Defines the root path route ("/")
  root "dashboards#index"

  get "/signin", to: "auth#signin"
  get "/signup", to: "auth#signup"
  get "/reset-password", to: "auth#reset_password"
  get "/new-password", to: "auth#new_password"
end
