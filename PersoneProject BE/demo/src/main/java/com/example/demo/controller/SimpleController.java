package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;


@Controller
@CrossOrigin(origins = "http://localhost:4200")
public class SimpleController {
    
 /*    @GetMapping(value = "/home")
    public String simpleController() {
        return "home";
    }   */
}
