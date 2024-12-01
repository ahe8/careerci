package com.ahe.personalprojects.careerci.repository;

import com.ahe.personalprojects.careerci.model.Certification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CertificationRepository extends JpaRepository<Certification, Long> {

    List<Certification> findAllByUser_FirebaseUid(String firebaseUid);
}
