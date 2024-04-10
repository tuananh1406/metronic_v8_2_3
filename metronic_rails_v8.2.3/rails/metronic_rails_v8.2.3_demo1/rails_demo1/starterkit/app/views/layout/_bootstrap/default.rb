=begin
This is an entry and Bootstrap class for the theme level.
=end
class KTBootstrapDefault

  @@KTTheme

  def init(helpers)
    @@KTTheme = helpers

    # 1) Light sidebar layout (default.html)
    # initLightSidebarLayout

    # 2) Dark sidebar layout (default.html)
    initDarkSidebarLayout

    # 3) Dark header layout (default_header_layout.html)
    # initDarkHeaderLayout

    # 4) Light header layout (default_header_layout.html)
    # initLightHeaderLayout

    # Init global assets for default layout
    initAssets
  end

  def initAssets
    # Include global vendors
    @@KTTheme.addVendors(%w[datatables fullcalendar])

    # Include global javascript files
    @@KTTheme.addJavascriptFile('widgets.bundle.js')
    @@KTTheme.addJavascriptFile('custom/apps/chat/chat.js')
    @@KTTheme.addJavascriptFile('custom/utilities/modals/upgrade-plan.js')
    @@KTTheme.addJavascriptFile('custom/utilities/modals/create-app.js')
    @@KTTheme.addJavascriptFile('custom/utilities/modals/users-search.js')
    @@KTTheme.addJavascriptFile('custom/utilities/modals/new-target.js')
  end

  def initDarkSidebarLayout
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-layout', 'dark-sidebar')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-header-fixed', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-enabled', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-fixed', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-hoverable', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-push-header', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-push-toolbar', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-push-footer', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-toolbar-enabled', 'true')

    @@KTTheme.addHtmlClass('body', 'app-default')
  end

  def initLightSidebarLayout
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-layout', 'light-sidebar')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-header-fixed', 'false')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-enabled', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-fixed', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-hoverable', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-push-header', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-push-toolbar', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-sidebar-push-footer', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-toolbar-enabled', 'true')

    @@KTTheme.addHtmlClass('body', 'app-default')
  end

  def initDarkHeaderLayout
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-layout', 'dark-header')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-header-fixed', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-toolbar-enabled', 'true')

    @@KTTheme.addHtmlClass('body', 'app-default')
  end

  def initLightHeaderLayout
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-layout', 'light-header')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-header-fixed', 'true')
    @@KTTheme.addHtmlAttribute('body', 'data-kt-app-toolbar-enabled', 'true')

    @@KTTheme.addHtmlClass('body', 'app-default')
  end

end