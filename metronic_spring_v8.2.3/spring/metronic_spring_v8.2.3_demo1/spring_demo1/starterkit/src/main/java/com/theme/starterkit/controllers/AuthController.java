package com.theme.starterkit.controllers;

import com.theme.starterkit.libs.KTTheme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class AuthController {
    @Autowired
    private KTTheme theme;

    @ModelAttribute
    public void init() {
        theme.setLayout("auth");
        theme.initLayout();
    }

    @GetMapping("/new-password")
    public String newPassword(){
        theme.addJavascriptFile("js/custom/authentication/reset-password/new-password.js");
        return theme.getPageView("auth", "new-password");
    }

    @GetMapping("/reset-password")
    public String resetPassword(){
        theme.addJavascriptFile("js/custom/authentication/reset-password/reset-password.js");
        return theme.getPageView("auth", "reset-password");
    }

    @GetMapping("/sign-in")
    public String signIn(){
        theme.addJavascriptFile("js/custom/authentication/sign-in/general.js");
        return theme.getPageView("auth", "sign-in");
    }

    @GetMapping("/sign-up")
    public String signUp(){
        theme.addJavascriptFile("js/custom/authentication/sign-up/general.js");
        return theme.getPageView("auth", "sign-up");
    }
}
