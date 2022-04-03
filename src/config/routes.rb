Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: redirect('/todos') # todosにリダイレクトさせる

  get 'todos', to: 'site#index'
  get 'todos/new', to: 'site#index'
  get 'todos/:id/edit', to: 'site#index'

  namespace :api do
    namespace :v1 do
      delete '/todos/destory_all', to: 'todos#destory_all'
      resources :todos, only: %i[index show create update destory]
    end
  end
end
