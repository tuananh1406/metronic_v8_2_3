class SystemController < ApplicationController

  def initialize
    super

    # Include the main layout bootstrap file
    require_relative "../views/#{Rails.configuration.settings.KT_THEME_LAYOUT_DIR}/_bootstrap/system"

    # Initialize the main layout bootstrap class
    KTBootstrapSystem.new.init(helpers)
  end

  def not_found
    render "pages/system/not_found",
           status: 404
  end

  def error
    render "pages/system/error",
           status: 500
  end
end
