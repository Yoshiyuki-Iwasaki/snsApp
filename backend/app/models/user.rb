class User < ApplicationRecord
    has_secure_password validations: true # こちらは新機能
end