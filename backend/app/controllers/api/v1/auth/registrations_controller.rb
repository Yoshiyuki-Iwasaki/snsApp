# アカウント作成用コントローラー
class Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  private

    def sign_up_params
      params.permit(:name, :email, :password, :password_confirmation,)
    end
end