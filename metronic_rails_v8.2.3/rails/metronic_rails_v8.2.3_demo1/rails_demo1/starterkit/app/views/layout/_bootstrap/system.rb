=begin
This is an entry and Bootstrap class for the theme level.
=end
class KTBootstrapSystem

  @@KTTheme

  def init(helpers)
    @@KTTheme = helpers

    @@KTTheme.addHtmlClass('body', 'app-blank')
    @@KTTheme.addHtmlClass('body', 'bgi-size-cover bgi-position-center bgi-no-repeat')
  end
end
