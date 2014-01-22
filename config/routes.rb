GoodBoardsApp::Application.routes.draw do
  namespace :api do
    resources :users, :only => [:show] do
      resources :reviews, :only => [:index]
    end

    resources :boardgames, :only => [:index]
    get "boardgames/prefetch" => 'boardgames#prefetch'
    
    resources :boardgames, :only => [:show, :update] do
      resources :reviews, :only => [:index, :new]
    end

    resources :reviews, :only => [:show, :create, :update] do
      resources :comments, :only => [:index]
    end

    resources :comments, :only=> [:create, :show]
  end
  resource :users, :only => [:new, :create]
  resource :session, :only => [:create, :destroy, :new]

  root :to => "root#root"
 
end
