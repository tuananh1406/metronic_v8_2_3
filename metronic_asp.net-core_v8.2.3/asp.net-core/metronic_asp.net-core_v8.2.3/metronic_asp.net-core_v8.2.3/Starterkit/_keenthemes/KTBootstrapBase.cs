using Starterkit._keenthemes.libs;

namespace Starterkit._keenthemes;
public class KTBootstrapBase: IKTBootstrapBase {
    private IKTTheme _theme = new KTTheme();

    // Init theme mode option from settings
    public void InitThemeMode()
    {
        _theme.SetModeSwitch(KTThemeSettings.Config.ModeSwitchEnabled);
        _theme.SetModeDefault(KTThemeSettings.Config.ModeDefault);
    }
 
    // Init theme direction option (RTL or LTR) from settings
    // Init RTL html attributes by checking if RTL is enabled.
    // This function is being called for the html tag
    public void InitThemeDirection()
    {
        _theme.SetDirection(KTThemeSettings.Config.Direction);

        if (_theme.IsRtlDirection())
        {
            _theme.AddHtmlAttribute("html", "direction", "rtl");
            _theme.AddHtmlAttribute("html", "dir", "rtl");
            _theme.AddHtmlAttribute("html", "style", "direction: rtl");
        }
    }

    public void InitLayout()
    {
        _theme.AddHtmlAttribute("body", "id", "kt_app_body");
    }

    // Global theme initializer
    public void Init(IKTTheme theme)
    {
        _theme = theme;
        
        InitThemeMode();
        InitThemeDirection();
        InitLayout();
    }
}
