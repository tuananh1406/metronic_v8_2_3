package com.theme.starterkit.libs.config;

import java.util.Map;

public class KTThemeBaseConfig {
    private String name;

    private String layoutDir;

    private String direction;

    private boolean modeSwitchEnabled;

    private String modeDefault;

    private String assetsDir;

    private String iconType;

    private String defaultLayout;

    private KTThemeAssets assets;

    private Map<String, Map<String, String[]>> vendors;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLayoutDir() {
        return layoutDir;
    }

    public void setLayoutDir(String layoutDir) {
        this.layoutDir = layoutDir;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public boolean isModeSwitchEnabled() {
        return modeSwitchEnabled;
    }

    public void setModeSwitchEnabled(boolean modeSwitchEnabled) {
        this.modeSwitchEnabled = modeSwitchEnabled;
    }

    public String getModeDefault() {
        return modeDefault;
    }

    public void setModeDefault(String modeDefault) {
        this.modeDefault = modeDefault;
    }

    public String getAssetsDir() {
        return assetsDir;
    }

    public String getIconType() {
        return iconType;
    }

    public void setAssetsDir(String assetsDir) {
        this.assetsDir = assetsDir;
    }

    public String getDefaultLayout() {
        return defaultLayout;
    }

    public void setDefaultLayout(String defaultLayout) {
        this.defaultLayout = defaultLayout;
    }

    public KTThemeAssets getAssets() {
        return assets;
    }

    public void setAssets(KTThemeAssets assets) {
        this.assets = assets;
    }

    public Map<String, Map<String, String[]>> getVendors() {
        return vendors;
    }

    public void setVendors(Map<String, Map<String, String[]>> vendors) {
        this.vendors = vendors;
    }
}
