package com.ahe.personalprojects.careerci.controller;

import com.ahe.personalprojects.careerci.dto.CertificationDTO;
import com.ahe.personalprojects.careerci.model.Certification;
import com.ahe.personalprojects.careerci.service.CertificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/certifications")
public class CertificationController {

    @Autowired
    private CertificationService certificationService;


    @GetMapping("/{id}")
    public List<Certification> getCertifications(@PathVariable String id) {
        return certificationService.getAllCertifications(id);
    }

    @PostMapping
    public Certification createCertifications(@RequestBody CertificationDTO certificationDto) {
        return certificationService.createCertification(certificationDto);
    }
}
