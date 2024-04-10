namespace Starterkit._keenthemes.libs;

// Core theme interface
public interface IKTTheme
{
    void AddHtmlAttribute(string scope, string attributeName, string attributeValue);

    void AddHtmlClass(string scope, string className);

    string PrintHtmlAttributes(string scope);

    string PrintHtmlClasses(string scope);

    string GetSvgIcon(string path, string cls);

    string GetIcon(string iconName, string iconClass="", string iconType="");

    void SetModeSwitch(bool flag);

    bool IsModeSwitchEnabled();
    
    void SetModeDefault(string flag);

    string GetModeDefault();

    void SetDirection(string direction);

    string GetDirection();

    bool IsRtlDirection();

    string GetAssetPath(string path);

    string GetView(string path);

    string GetPageView(string folder, string file);

    string ExtendCssFilename(string path);

    string GetFavicon();

    string[] GetFonts();

    string[] GetGlobalAssets(String type);

    void AddVendors(string[] vendors);

    void AddVendor(string vendor);

    void AddJavascriptFile(string file);

    void AddCssFile(string file);

    string[] GetJavascriptFiles();

    string[] GetCssFiles();

    string[] GetVendors(string type);

    string GetAttributeValue(string scope, string attributeName);
}
