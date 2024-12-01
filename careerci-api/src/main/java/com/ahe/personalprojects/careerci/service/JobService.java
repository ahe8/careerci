package com.ahe.personalprojects.careerci.service;

import com.ahe.personalprojects.careerci.model.Job;
import com.ahe.personalprojects.careerci.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private final JobRepository jobRepository;

    @Autowired
    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    public List<Job> getAllJobs(String firebaseUid) {
        return jobRepository.findAllByUser_FirebaseUid(firebaseUid);
    }

    public Job createJob (Job job) {
        return jobRepository.save(job);
    }
}
