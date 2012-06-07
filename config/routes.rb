AhaApp::Application.routes.draw do

  resources :notes

  get "pages/mockup"

  root to: 'notes#index'
  
end
