package com.ahe.personalprojects.careerci.repository;

import com.ahe.personalprojects.careerci.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {

    List<Job> findAllByUser_FirebaseUid(String firebaseUid);
}
