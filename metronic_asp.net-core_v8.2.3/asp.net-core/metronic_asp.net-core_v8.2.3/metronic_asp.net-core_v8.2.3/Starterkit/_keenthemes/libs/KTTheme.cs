namespace Starterkit._keenthemes.libs;

// Core theme class
public class KTTheme: IKTTheme
{
    // Theme variables
    private bool _modeSwitchEnabled;

    private string _modeDefault = "light";

    private string _direction = "ltr";

    private readonly SortedDictionary<string, SortedDictionary<string, string>> _htmlAttributes = new SortedDictionary<string, SortedDictionary<string, string>>();

    private readonly SortedDictionary<string, string[]> _htmlClasses = new SortedDictionary<string, string[]>();

    // Keep page level assets
    private readonly List<string> _javascriptFiles = new List<string>();

    private readonly List<string> _cssFiles = new List<string>();

    private readonly List<string> _vendorFiles = new List<string>();

    // Add HTML attributes by scope
    public void AddHtmlAttribute(string scope, string attributeName, string attributeValue)
    {
        SortedDictionary<string, string> attributes = new SortedDictionary<string, string>();
        if (_htmlAttributes.ContainsKey(scope))
        {
            attributes = new SortedDictionary<string, string>(_htmlAttributes[scope]);
        }
        else
        {
            attributes = new SortedDictionary<string, string>();
        }

        attributes[attributeName] = attributeValue;
        _htmlAttributes[scope] = attributes;
    }

    // Add HTML class by scope
    public void AddHtmlClass(string scope, string className)
    {
        var list = new List<string>();
        if (_htmlClasses.ContainsKey(scope))
        {
            list = _htmlClasses[scope].ToList();
        }
        list.Add(className);
        _htmlClasses[scope] = list.ToArray();
    }

    // Print HTML attributes for the HTML template
    public string PrintHtmlAttributes(string scope)
    {
        var list = new List<string>();
        if (_htmlAttributes.ContainsKey(scope))
        {
            foreach (KeyValuePair<string, string> attribute in _htmlAttributes[scope])
            {
                var item = attribute.Key + "=" + attribute.Value;
                list.Add(item);
            }
            return String.Join(" ", list);
        }
        return "";
    }

    // Print HTML classes for the HTML template
    public string PrintHtmlClasses(string scope)
    {
        if (_htmlClasses.ContainsKey(scope))
        {
            return String.Join(" ", _htmlClasses[scope]);
        }
        return "";
    }

    // Get SVG icon content
    public string GetSvgIcon(string path, string classNames)
    {
        var svg = System.IO.File.ReadAllText($"./wwwroot/assets/media/icons/{path}");

        return $"<span class=\"{classNames}\">{svg}</span>";
    }

    // Get keenicon set icon
    public string GetIcon(string iconName, string iconClass = "", string iconType = "")
    {
        string tag = "i";
        string output = "";
        string iconsFinalClass = iconClass=="" ? "" : " "+iconClass;

        if(iconType=="" && KTThemeSettings.Config.IconsType!=""){
            iconType = KTThemeSettings.Config.IconsType;
        }

        if(iconType==""){
            iconType= "duotone";
        }

        if(iconType=="duotone"){
             int paths = KTIconsSettings.Config.ContainsKey(iconName) ? KTIconsSettings.Config[iconName] : 0;


            output += $"<{tag} class='ki-{iconType} ki-{iconName}{iconsFinalClass}'>";

            for (int i = 0; i < paths; i++)
            {
                output += $"<span class='path{i+1}'></span>";
            }

            output += $"</{tag}>";
        } else {
            output = $"<{tag} class='ki-{iconType} ki-{iconName}{iconsFinalClass}'></{tag}>";
        }

        return output;
        
    }

    // Set dark mode enabled status
    public void SetModeSwitch(bool flag)
    {
        _modeSwitchEnabled = flag;
    }

    // Check dark mode status
    public bool IsModeSwitchEnabled()
    {
        return _modeSwitchEnabled;
    }

    // Set the mode to dark or light
    public void SetModeDefault(string mode)
    {
        _modeDefault = mode;
    }

    // Get current mode
    public string GetModeDefault()
    {
        return _modeDefault;
    }

    // Set style direction
    public void SetDirection(string direction)
    {
       _direction = direction;
    }

    // Get style direction
    public string GetDirection()
    {
        return _direction;
    }

    // Checks if style direction is RTL
    public bool IsRtlDirection()
    {
        return _direction.ToLower() == "rtl";
    }

    public string GetAssetPath(string path)
    {
        return $"/{KTThemeSettings.Config.AssetsDir}{path}";
    }

    public string GetView(string path)
    {
        return $"{KTThemeSettings.Config.LayoutDir}/{path}";
    }

    public string GetPageView(string folder, string file)
    {
        return $"~/Views/Pages/{folder}/{KTThemeSettings.Config.Name}/{file}";
    }

    // Extend CSS file name with RTL
    public string ExtendCssFilename(string path)
    {

        if (IsRtlDirection())
        {
            path = path.Replace(".css", ".rtl.css");
        }

        return path;
    }

    // Include favicon from settings
    public string GetFavicon()
    {
        return GetAssetPath(KTThemeSettings.Config.Assets.Favicon);
    }

    // Include the fonts from settings
    public string[] GetFonts()
    {
        return KTThemeSettings.Config.Assets.Fonts.ToArray();
    }

    // Get the global assets
    public string[] GetGlobalAssets(String type)
    {
        List<string> files =
            type == "Css" ? KTThemeSettings.Config.Assets.Css : KTThemeSettings.Config.Assets.Js;
        List<string> newList = new List<string>();

        foreach (string file in files)
        {
            if (type == "Css")
            {
                newList.Add(GetAssetPath(ExtendCssFilename(file)));
            }
            else
            {
                newList.Add(GetAssetPath(file));
            }
        }

        return newList.ToArray();
    }

    // Add multiple vendors to the page by name
    public void AddVendors(string[] vendors)
    {
        foreach (var vendor in vendors)
        {
            if (!_vendorFiles.Contains(vendor))
            {
                _vendorFiles.Add(vendor);
            }
        }
    }

    // Add single vendor to the page by name
    public void AddVendor(string vendor)
    {
        if (!_vendorFiles.Contains(vendor))
        {
            _vendorFiles.Add(vendor);
        }
    }

    // Add custom javascript file to the page
    public void AddJavascriptFile(string file)
    {
        if (!_javascriptFiles.Contains(file))
        {
            _javascriptFiles.Add(file);
        }
    }

    // Add custom CSS file to the page
    public void AddCssFile(string file)
    {
        if (!_cssFiles.Contains(file))
        {
            _cssFiles.Add(file);
        }
    }

    public string[] GetJavascriptFiles()
    {
        return _javascriptFiles.ToArray();
    }

    public string[] GetCssFiles()
    {
        return _cssFiles.ToArray();
    }

    // Get vendor files from settings
    public string[] GetVendors(string type)
    {
        var vendors = KTThemeSettings
            .Config
            .Vendors;
        var files = new List<string>();
        foreach (var vendor in _vendorFiles)
        {
            if (vendors.ContainsKey(vendor) && vendors[vendor].ContainsKey(type))
            {
                var vendorFiles = vendors[vendor][type];
                foreach (var file in vendorFiles)
                {
                    var vendorPath = file.Contains("https://") ? file : GetAssetPath(file);
                    files.Add(vendorPath);
                }
            }
        }
        return files.ToArray();
    }

    public string GetAttributeValue(string scope, string attributeName){
        if (_htmlAttributes.ContainsKey(scope))
        {
            if (_htmlAttributes[scope].ContainsKey(attributeName))
            {
                return _htmlAttributes[scope][attributeName];
            }
            return "";
        }

        return "";
    }
}
