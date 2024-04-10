package com.theme.starterkit.config;

import com.theme.starterkit.libs.KTTheme;
import com.theme.starterkit.libs.config.KTThemeBaseConfig;
import com.theme.starterkit.libs.config.KTIconsBaseSettings;
import com.theme.starterkit.libs.config.KTThemeSettings;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.context.annotation.RequestScope;

@Configuration
public class ThemeConfig {
    @Bean("theme")
    @RequestScope
    public KTTheme theme(){
        return new KTTheme();
    }

    @Bean("settings")
    public KTThemeBaseConfig settings() {
        KTThemeSettings settings = new KTThemeSettings();
        return settings.config;
    }

    @Bean("iconsSettings")
    public KTIconsBaseSettings iconsSettings(){
       return new KTIconsBaseSettings();
    }
}
