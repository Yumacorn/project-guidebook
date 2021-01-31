Rails.application.routes.draw do

  resources :universes do
    resources :characters 
  end

end
