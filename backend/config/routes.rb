Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      delete '/todos/destroy_all', to: 'todos#destroy_all'
      resources :todos, only: %i[index show create update destroy]
      resources :user, only: [:new, :create, :show]
      # get 'login', to: 'sessions#new'
      post 'login', to: 'sessions#create'
      delete 'logout', to: 'sessions#destroy'
      get 'logged_in', to: 'sessions#logged_in?'
    end
  end
end