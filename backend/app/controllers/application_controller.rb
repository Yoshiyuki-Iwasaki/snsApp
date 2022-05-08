class ApplicationController < ActionController::Base
    include DeviseTokenAuth::Concerns::SetUserByToken
    protect_from_forgery with: :null_session
    skip_before_action :verify_authenticity_token
    # helper_method :current_user, :user_signed_in?

    # def configure_permitted_parameters
    #     devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :image])
    # end
end
