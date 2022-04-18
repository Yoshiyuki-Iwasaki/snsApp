Rails.application.routes.draw do

  get 'todos', to: 'site#index'
  get 'todos/new', to: 'site#index'
  get 'todos/:id/edit', to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :todos, only: %i[index show create update destroy]
    end
  end
end