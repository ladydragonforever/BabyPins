Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"



  namespace :api, defaults:{format: :json} do
    resources :users
    resources :boards do
      resources :pins, only: [:create]
    end

    resource :session, only: [:create, :destroy]
    resources :pictures, only: [:index, :show]
    
    delete "/:board_id/:picture_id", to: 'pins#destroy'
    
  end

  
end
