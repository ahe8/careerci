package com.ahe.personalprojects.careerci.controller;


import com.ahe.personalprojects.careerci.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobRepository jobRepository;


//    public List<Job> getAllJobs(String firebaseUid) {
//        return jobRepository.findByFirebaseUid(firebaseUid);
//    }
}
