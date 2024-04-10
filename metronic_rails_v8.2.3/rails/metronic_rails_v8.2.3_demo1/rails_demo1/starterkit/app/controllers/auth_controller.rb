class AuthController < ApplicationController

  def initialize
    super
    # Include the main layout bootstrap file
    require_relative "../views/#{Rails.configuration.settings.KT_THEME_LAYOUT_DIR}/_bootstrap/auth"

    # Initialize the main layout bootstrap class
    KTBootstrapDefault.new.init(helpers)
  end

  def signin
    helpers.addJavascriptFile('custom/authentication/sign-in/general.js')

    render "pages/auth/signin"
  end

  def signup
    helpers.addJavascriptFile('custom/authentication/sign-up/general.js')

    render "pages/auth/signup"
  end

  def reset_password
    helpers.addJavascriptFile('custom/authentication/reset-password/reset-password.js')

    render "pages/auth/reset-password"
  end

  def new_password
    helpers.addJavascriptFile('custom/authentication/reset-password/new-password.js')

    render "pages/auth/new-password"
  end
end
