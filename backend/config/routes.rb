Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :todos, only: %i[index show create update destroy]
      resources :users, only: %i[create show]
      resources :favorites, only: %i[destroy]
      resources :relationships, only: %i[destroy]
      resources :todos do
        resources :users do
          resources :favorites, only: %i[index create]
        end
      end
      get '/todos/users/:id/', to: "todos#userIndex"
      get '/favorites/users/:id', to: "favorites#todoIndex"
      get '/users/:id/follower/:follower_id/relationships', to: "relationships#index"
      post '/users/:id/relationships', to: "relationships#create", as: "follow_user"
      post 'login', to: 'sessions#create'
      delete 'logout', to: 'sessions#destroy'
      get 'logged_in', to: 'sessions#logged_in?'
    end
  end
end