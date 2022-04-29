Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks], controllers: {
        registrations: 'api/v1/auth/registrations'
      }
      get '/todos/page/:page/', to: "todos#index"
      get '/todos/users/:id/', to: "todos#userIndex"

      resources :todos, only: %i[create update destroy show]
      resources :users, only: %i[create show]
      resources :favorites, only: %i[create destroy]
      resources :relationships, only: %i[destroy]
      resources :replies, only: %i[index create update destroy]
      resources :todos do
        resources :users do
          resources :favorites, only: %i[index]
        end
      end

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      get '/replies/todos/:id/', to: "replies#index"
      get '/favorites/users/:id', to: "favorites#todoIndex"
      get '/users/:id/follower/:follower_id/relationships', to: "relationships#index"
      post '/users/:id/relationships', to: "relationships#create", as: "follow_user"
    end
  end
end