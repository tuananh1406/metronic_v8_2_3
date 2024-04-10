package com.theme.starterkit.controllers;

import com.theme.starterkit.libs.KTTheme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Controller
public class SystemController implements ErrorController {
    @Autowired
    private KTTheme theme;

    @ModelAttribute
    public void init() {
        theme.setLayout("system");
        theme.initLayout();
    }

    @GetMapping("/not-found")
    public String notFound(){
        return theme.getPageView("system", "not-found.html");
    }

    @GetMapping("/error")
    public String error(HttpServletRequest request){
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);

        if (status != null) {
            int statusCode = Integer.parseInt(status.toString());

            if(statusCode == HttpStatus.NOT_FOUND.value()) {
                return theme.getPageView("system", "not-found.html");
            }
            else if(statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
                return theme.getPageView("system", "error.html");
            }
        }
        return theme.getPageView("system", "error.html");
    }
}
