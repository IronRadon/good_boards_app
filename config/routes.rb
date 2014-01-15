GoodBoardsApp::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:create, :destroy, :new]
  resources :boardgames, :only => [:show]

  root :to => "root#root"

 
end
