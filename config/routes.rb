GoodBoardsApp::Application.routes.draw do
  namespace :api do
    resources :users, :only => [:show] do
      resources :reviews, :only => [:index]
    end
    
    resources :boardgames, :only => [:show] do
      resources :reviews, :only => [:index, :new, :create]
    end
    resources :reviews, :only => [:show]
  end
  resource :users, :only => [:new, :create]
  resource :session, :only => [:create, :destroy, :new]

  root :to => "root#root"
 
end
