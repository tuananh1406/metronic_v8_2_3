class KTBootstrap {

    // Global theme initializer
    init() {
        this.initThemeMode();
        this.initThemeDirection();
        this.initLayout();
    }

    // Init theme mode option from settings
    initThemeMode()
    {
        theme.setModeSwitch(themesettings.modeSwitchEnabled);
        theme.setModeDefault(themesettings.modeDefault);
    }

    // Init theme direction option (RTL or LTR) from settings
    // Init RTL html attributes by checking if RTL is enabled.
    // This function is being called for the html tag
    initThemeDirection()
    {
        theme.setDirection(themesettings.direction);

        if (theme.isRtlDirection())
        {
            theme.addHtmlAttribute("html", "direction", "rtl");
            theme.addHtmlAttribute("html", "dir", "rtl");
            theme.addHtmlAttribute("html", "style", "direction: rtl");
        }
    }

    initLayout(){
        theme.addHtmlAttribute("body", "id", "kt_app_body");
    }

    initDefault(){
        // Layout options
        theme.addHtmlAttribute("body", "data-kt-app-toolbar-enabled", "true");
        theme.addHtmlAttribute("body", "data-kt-app-header-fixed-mobile", "true");
        theme.addHtmlClass("body", "app-default");

        // Global vendors and javascript files
        theme.addVendor("datatables");
        theme.addJavascriptFile("js/widgets.bundle.js");
        theme.addJavascriptFile("js/custom/apps/chat/chat.js");
        theme.addJavascriptFile("js/custom/utilities/modals/upgrade-plan.js");
        theme.addJavascriptFile("js/custom/utilities/modals/create-app.js");
        theme.addJavascriptFile("js/custom/utilities/modals/users-search.js");
        theme.addJavascriptFile("js/custom/utilities/modals/new-target.js");
    }

    initAuthLayout(){
        // Layout options
        theme.addHtmlClass("body", "app-blank");
    }

    initSystemLayout(){
        // Layout options
        theme.addHtmlClass("body", "app-black bgi-size-cover bgi-position-center bgi-no-repeat");
    }
}


module.exports = function createKtBootstrapInstance() {
    return new KTBootstrap();
};