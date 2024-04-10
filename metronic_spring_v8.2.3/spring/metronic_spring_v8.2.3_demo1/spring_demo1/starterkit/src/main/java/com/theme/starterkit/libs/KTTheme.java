package com.theme.starterkit.libs;

import com.theme.starterkit.libs.config.KTIconsBaseSettings;
import com.theme.starterkit.libs.config.KTThemeBaseConfig;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class KTTheme {
    @Autowired
    private KTThemeBaseConfig settings;

    @Autowired
    private KTIconsBaseSettings iconSettings;

    // Theme variables
    private boolean modeSwitchEnabled = false;

    private String modeDefault = "light";

    private String direction = "ltr";

    private String currentLayout = null;

    private final Map<String, Map<String, String>> htmlAttributes = new HashMap<String, Map<String, String>>();

    private final Map<String, String[]> htmlClasses = new HashMap<String, String[]>();

    // Keep page level assets
    private final List<String> javascriptFiles = new ArrayList<String>();

    private final List<String> cssFiles = new ArrayList<String>();

    private final List<String> vendorFiles = new ArrayList<String>();

    public void initLayout(){
        KTBootstrap bootstrap = new KTBootstrap(this, settings);
        bootstrap.init();
        switch (this.getLayout()) {
            case "auth" -> bootstrap.initAuthLayout();
            case "default-dark-header" -> bootstrap.initDarkHeaderLayout();
            case "default-light-header" -> bootstrap.initLightHeaderLayout();
            case "default-dark-sidebar" -> bootstrap.initDarkSidebarLayout();
            case "default-light-sidebar" -> bootstrap.initLightSidebarLayout();
            case "system" -> bootstrap.initSystemLayout();
        }
    }

    // Add HTML attributes by scope
    public void addHtmlAttribute(String scope, String attributeName, String attributeValue)
    {
        Map<String, String> attributes;
        if (htmlAttributes.containsKey(scope))
        {
            attributes = htmlAttributes.get(scope);
        }
        else
        {
            attributes = new HashMap<String, String>();
        }

        attributes.put(attributeName, attributeValue);
        htmlAttributes.put(scope, attributes);
    }

    // Add HTML class by scope
    public void addHtmlClass(String scope, String className)
    {
        List<String> list;
        if (htmlClasses.containsKey(scope))
        {
            list = new ArrayList<String>(Arrays.asList(htmlClasses.get(scope)));
        } else {
            list = new ArrayList<String>();
        }
        list.add(className);
        String[] array = new String[list.size()];
        htmlClasses.put(scope, list.toArray(array));
    }

    // Print HTML attributes for the HTML template
    public String printHtmlAttributes(String scope)
    {
        List<String> list = new ArrayList<String>();
        if (htmlAttributes.containsKey(scope))
        {
            htmlAttributes.get(scope).forEach((key, value) -> {
                String item = key + "=" + value;
                list.add(item);
            });
            return String.join(",", list);
        }
        return "data-kt-no-attribute='true'";
    }

    // Print HTML classes for the HTML template
    public String printHtmlClasses(String scope)
    {
        if (htmlClasses.containsKey(scope))
        {
            return String.join(" ", htmlClasses.get(scope));
        }
        return "";
    }

    // Get SVG icon content
    public String getSvgIcon(String path, String classNames)
    {
        List<String> svgLines = new ArrayList<String>();
        try {
            File myObj = new File("./src/main/resources/static/assets/media/icons/" + path);
            Scanner myReader = new Scanner(myObj);
            while (myReader.hasNextLine()) {
                String line = myReader.nextLine();
                svgLines.add(line);
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            System.out.println(path+" is not found!");
            e.printStackTrace();
        }

        StringBuilder output = new StringBuilder();

        output.append("<span class=\"").append(classNames).append("\">");
        for (String line : svgLines) {
            output.append(line);
        }
        output.append("</span>");

        return output.toString();
    }

    public String getIcon(String iconName, String iconClass, String iconType)
    {
        StringBuilder output = new StringBuilder();

        String iconsFinalClass = iconClass.equals("") ? "" : " "+iconClass;

        if(iconType.equals("") && !settings.getIconType().equals( "")){
            iconType = settings.getIconType();
        }

        if(iconType.equals("")){
            iconType= "outline";
        }

        if(iconType.equals("duotone")){
            int paths = iconSettings.config.getOrDefault(iconName, 0);


            output.append("<i class=\"ki-").append(iconType).append(" ki-").append(iconName).append(" ").append(iconsFinalClass).append("\">");
            for(int i=1; i<=paths; i++) {
                output.append("<span class=\"").append("path").append(i).append("\"></span>");
            }
            output.append("</i>");
        } else {
            output.append("<i class=\"ki-").append(iconType).append(" ki-").append(iconName).append(" ").append(iconsFinalClass).append("\"></i>");
        }



        return output.toString();
    }

    public String getIcon(String iconName, String iconClass){
        return getIcon(iconName, iconClass, "");
    }

    public String getIcon(String iconName){
        return getIcon(iconName, "", "");
    }

    // Set dark mode enabled status
    public void setModeSwitch(boolean flag)
    {
        modeSwitchEnabled = flag;
    }

    // Check dark mode status
    public boolean isModeSwitchEnabled()
    {
        return modeSwitchEnabled;
    }

    // Set the mode to dark or light
    public void setModeDefault(String mode)
    {
        modeDefault = mode;
    }

    // Get current mode
    public String getModeDefault()
    {
        return modeDefault;
    }

    // Set style direction
    public void setDirection(String direction)
    {
        this.direction = direction;
    }

    // Get style direction
    public String getDirection()
    {
        return direction;
    }

    // Checks if style direction is RTL
    public boolean isRtlDirection()
    {
        return direction.equalsIgnoreCase("rtl");
    }

    public String getAssetPath(String path)
    {
        return settings.getAssetsDir() + path;
    }

    public String getView(String path)
    {
        return settings.getLayoutDir() + path;
    }

    public String getPageView(String folder, String file)
    {
        return "pages/"+ folder +"/" + file;
    }

    // Extend CSS file name with RTL
    public String extendCssFilename(String path)
    {
        if (isRtlDirection())
        {
            path = path.replace(".css", ".rtl.css");
        }

        return path;
    }

    // Include favicon from settings
    public String getFavicon()
    {
        return getAssetPath(settings.getAssets().favicon);
    }

    // Include the fonts from settings
    public String[] getFonts()
    {
        String[] array = new String[settings.getAssets().fonts.size()];
        return settings.getAssets().fonts.toArray(array);
    }

    // Get the global assets
    public String[] getGlobalAssets(String type)
    {
        List<String> files =
                Objects.equals(type, "Css") ? settings.getAssets().css : settings.getAssets().js;
        List<String> newList = new ArrayList<String>();

        files.forEach((file) -> {
            if (Objects.equals(type, "Css"))
            {
                newList.add(getAssetPath(extendCssFilename(file)));
            }
            else
            {
                newList.add(getAssetPath(file));
            }
        });

        String[] array = new String[newList.size()];
        return newList.toArray(array);
    }

    // Add multiple vendors to the page by name
    public void addVendors(String[] vendors)
    {
        for(String vendor : vendors)
        {
            if (!vendorFiles.contains(vendor))
            {
                vendorFiles.add(vendor);
            }
        }
    }

    // Add single vendor to the page by name
    public void addVendor(String vendor)
    {
        if (!vendorFiles.contains(vendor))
        {
            vendorFiles.add(vendor);
        }
    }

    // Add custom javascript file to the page
    public void addJavascriptFile(String file)
    {
        if (!javascriptFiles.contains(file))
        {
            javascriptFiles.add(file);
        }
    }

    // Add custom CSS file to the page
    public void addCssFile(String file)
    {
        if (!cssFiles.contains(file))
        {
            cssFiles.add(file);
        }
    }

    public String[] getJavascriptFiles()
    {
        String[] array = new String[javascriptFiles.size()];
        return javascriptFiles.toArray(array);
    }

    public String[] getCssFiles()
    {
        String[] array = new String[cssFiles.size()];
        return cssFiles.toArray(array);
    }

    // Get vendor files from settings
    public String[] getVendors(String type)
    {
        Map<String, Map<String, String[]>> vendors = settings.getVendors();
        List<String> files = new ArrayList<String>();
        vendorFiles.forEach(vendor -> {
            if (vendors.containsKey(vendor) && vendors.get(vendor).containsKey(type))
            {
                String[] vendorFiles = vendors.get(vendor).get(type);
                for(String file : vendorFiles)
                {
                    String vendorPath = file.contains("https://") ? file : getAssetPath(file);
                    files.add(vendorPath);
                }
            }
        });
        String[] array = new String[files.size()];
        return files.toArray(array);
    }

    public String getAttributeValue(String scope, String attributeName){
        if (htmlAttributes.containsKey(scope))
        {
            if (htmlAttributes.get(scope).containsKey(attributeName))
            {
                return htmlAttributes.get(scope).get(attributeName);
            }
            return "";
        }

        return "";
    }

    public void setLayout(String layout){
        this.currentLayout = layout;
    }

    public String getLayout(){
        return this.currentLayout;
    }
}
