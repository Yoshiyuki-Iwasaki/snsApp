Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks], controllers: {
        registrations: 'api/v1/auth/registrations'
      }
      resources :todos, only: %i[create update destroy show]
      resources :users, only: %i[create show update]
      resources :favorites, only: %i[create destroy]
      resources :relationships, only: %i[destroy]
      resources :replies, only: %i[index create update destroy]
      resources :notifications, only: %i[create]
      resources :todos do
        resources :users do
          resources :favorites, only: %i[index]
        end
      end

      namespace :auth do
        resources :sessions, only: %i[index]
      end

      get '/todos/page/:page/', to: "todos#index"
      get '/todos/users/:id/', to: "todos#userIndex"
      get '/favorites/users/:id', to: "favorites#userIndex"
      get '/replies/todos/:id/', to: "replies#index"
      get '/replies/:reply_id/users/:user_id/favorites/', to: "favorites#replyIndex"
      get '/notifications/user/:id/', to: "notifications#index"
      get '/following/:following_id/follower/:follower_id/relationships', to: "relationships#index"
      get '/follower/:follower_id/relationships', to: "relationships#followingIndex"
      get '/following/:following_id/relationships', to: "relationships#followerIndex"
      post '/following/:id/relationships', to: "relationships#create"
    end
  end
end