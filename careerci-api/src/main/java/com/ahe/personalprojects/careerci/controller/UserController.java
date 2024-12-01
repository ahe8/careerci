package com.ahe.personalprojects.careerci.controller;

import com.ahe.personalprojects.careerci.model.User;
import com.ahe.personalprojects.careerci.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/users")
public class UserController {


    @Autowired
    private UserService userService;


    @GetMapping("/{id}")
    public User findByFirebaseUid(@PathVariable String id) {
        return userService.findByFirebaseUid(id);
    }


    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}
