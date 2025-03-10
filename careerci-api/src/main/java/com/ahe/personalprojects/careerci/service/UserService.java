package com.ahe.personalprojects.careerci.service;

import com.ahe.personalprojects.careerci.model.User;
import com.ahe.personalprojects.careerci.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User findByFirebaseUid(String firebaseUid) {
        return userRepository.findByFirebaseUid(firebaseUid);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

}
