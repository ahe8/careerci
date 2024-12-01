package com.ahe.personalprojects.careerci.service;

import com.ahe.personalprojects.careerci.dto.CertificationDTO;
import com.ahe.personalprojects.careerci.model.Certification;
import com.ahe.personalprojects.careerci.model.User;
import com.ahe.personalprojects.careerci.repository.CertificationRepository;
import com.ahe.personalprojects.careerci.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CertificationService {

    private final UserRepository userRepository;
    private final CertificationRepository certificationRepository;

    @Autowired
    public CertificationService(UserRepository userRepository, CertificationRepository certificationRepository) {
        this.userRepository = userRepository;
        this.certificationRepository = certificationRepository;
    }

    public List<Certification> getAllCertifications(String firebaseUid) {
        return certificationRepository.findAllByUser_FirebaseUid(firebaseUid);
    }

    public Certification createCertification(CertificationDTO certificationDto) {
        User user = userRepository.findByFirebaseUid(certificationDto.getFirebaseUid());

        Certification certification = new Certification();
        certification.setOrganization(certificationDto.getOrganization());
        certification.setName(certificationDto.getName());
        certification.setUrl(certificationDto.getUrl());
        certification.setIssueDate(certificationDto.getIssueDate());
        certification.setExpiryDate(certificationDto.getExpiryDate());
        certification.setUser(user);

        return certificationRepository.save(certification);
    }
}
