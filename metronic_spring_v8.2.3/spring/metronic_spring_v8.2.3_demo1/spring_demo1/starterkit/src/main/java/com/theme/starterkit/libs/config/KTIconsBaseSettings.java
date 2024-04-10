package com.theme.starterkit.libs.config;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

public class KTIconsBaseSettings {
    public Map<String, Integer> config;

    public KTIconsBaseSettings() {
        ObjectMapper objectMapper = new ObjectMapper();
        File file = new File("_keenthemes/config/icons.json");
        try {
            config = objectMapper.readValue(file, new TypeReference<Map<String, Integer>>() {});
        } catch (Exception e) {
            throw new IllegalStateException(e);
        }
    }
}
