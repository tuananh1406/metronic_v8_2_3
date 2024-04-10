package com.theme.starterkit.libs;

import com.theme.starterkit.libs.config.KTThemeBaseConfig;

public class KTBootstrap {

    private final KTTheme theme;

    private final KTThemeBaseConfig settings;

    public KTBootstrap(KTTheme theme, KTThemeBaseConfig settings){
        this.theme = theme;
        this.settings = settings;
    }

    // Global theme initializer
    public void init() {
        initThemeMode();
        initThemeDirection();
        initLayout();
    }

    // Init theme mode option from settings
    public void initThemeMode()
    {
        theme.setModeSwitch(settings.isModeSwitchEnabled());
        theme.setModeDefault(settings.getModeDefault());
    }

    // Init theme direction option (RTL or LTR) from settings
    // Init RTL html attributes by checking if RTL is enabled.
    // This function is being called for the html tag
    public void initThemeDirection()
    {
        theme.setDirection(settings.getDirection());

        if (theme.isRtlDirection())
        {
            theme.addHtmlAttribute("html", "direction", "rtl");
            theme.addHtmlAttribute("html", "dir", "rtl");
            theme.addHtmlAttribute("html", "style", "'direction: rtl'");
        }
    }

    public void initLayout(){
        theme.addHtmlAttribute("body", "id", "kt_app_body");

        theme.setLayout(settings.getDefaultLayout());
    }

    public void initDarkSidebarLayout(){
        // Layout options
        theme.addHtmlAttribute("body", "data-kt-app-layout", "dark-sidebar");
        theme.addHtmlAttribute("body", "data-kt-app-header-fixed", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-fixed", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-hoverable", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-push-header", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-push-toolbar", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-push-footer", "true");
        theme.addHtmlAttribute("body", "data-kt-app-toolbar-enabled", "true");
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

    public void initLightSidebarLayout(){
        // Layout options
        theme.addHtmlAttribute("body", "data-kt-app-layout", "light-sidebar");
        theme.addHtmlAttribute("body", "data-kt-app-header-fixed", "false");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-fixed", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-hoverable", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-push-header", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-push-toolbar", "true");
        theme.addHtmlAttribute("body", "data-kt-app-sidebar-push-footer", "true");
        theme.addHtmlAttribute("body", "data-kt-app-toolbar-enabled", "true");
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

    public void initDarkHeaderLayout(){
        // Layout options
        theme.addHtmlAttribute("body", "data-kt-app-layout", "dark-header");
        theme.addHtmlAttribute("body", "data-kt-app-header-fixed", "true");
        theme.addHtmlAttribute("body", "data-kt-app-toolbar-enabled", "true");
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

    public void initLightHeaderLayout(){
        // Layout options
        theme.addHtmlAttribute("body", "data-kt-app-layout", "light-header");
        theme.addHtmlAttribute("body", "data-kt-app-header-fixed", "true");
        theme.addHtmlAttribute("body", "data-kt-app-toolbar-enabled", "true");
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

    public void initAuthLayout(){
        // Layout options
        theme.addHtmlClass("body", "app-blank");
    }

    public void initSystemLayout(){
        // Layout options
        theme.addHtmlClass("body", "app-black bgi-size-cover bgi-position-center bgi-no-repeat");
    }
}
