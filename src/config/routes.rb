Rails.application.routes.draw do

  root 'site#index'
  get '/', to: 'site#index'
  get '/new', to: 'site#index'
  get '/:id/edit', to: 'site#index'

  namespace :api do
    namespace :v1 do
      delete '/todos/destroy_all', to: 'todos#destroy_all'
      resources :todos, only: %i[index show create update destroy]
    end
  end
end