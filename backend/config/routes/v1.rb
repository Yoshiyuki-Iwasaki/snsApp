Rails.application.routes.draw do

  get 'posts', to: 'site#index'
  get 'posts/new', to: 'site#index'
  get 'posts/:id/edit', to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :posts, only: %i[index show create update destroy]
    end
  end
end