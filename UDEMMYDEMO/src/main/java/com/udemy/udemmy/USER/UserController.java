package com.udemy.udemmy.USER;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/findAll")
    public ResponseEntity<Object> list() {
        List<User> Users = userRepository.findAll();
        return new ResponseEntity<>(Users, HttpStatus.OK);
    }


    @PostMapping("/register")
    public ResponseEntity<Object> create(@RequestBody User user){
        userRepository.save(user);
        JSONObject jsonObject = new JSONObject();
        //jsonObject.put("message","User created successfully");
        return  new ResponseEntity<>(jsonObject, HttpStatus.CREATED);
    }




    @GetMapping("/login")

    public ResponseEntity<Object> login(@RequestBody User user) {
        User one = userRepository.findUserByUsername(user.getUsername());
        if (one != null || one.getPassword() != user.getPassword()) {
            Map<String, String> userDetail = new HashMap<>();
            userDetail.put("username", one.getUsername());
            userDetail.put("email", one.getEmail());

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("message", "User login successfully");
            return new ResponseEntity<>(jsonObject, HttpStatus.OK);
        }
        JSONObject jsonObject= new JSONObject();
        jsonObject.put("message", "User login successfully");

        return new ResponseEntity<>(jsonObject, HttpStatus.OK);
    }

}
