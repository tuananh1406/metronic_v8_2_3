=begin
This is an entry and Bootstrap class for the theme level.
=end
class KTBootstrapAuth

  @@KTTheme

  def init(helpers)
    @@KTTheme = helpers

    @@KTTheme.addHtmlClass('body', 'app-blank')
  end
end
