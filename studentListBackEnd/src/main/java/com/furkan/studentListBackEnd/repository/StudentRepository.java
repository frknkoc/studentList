package com.furkan.studentListBackEnd.repository;

import com.furkan.studentListBackEnd.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    Optional<Student> findByEmail(String email);
}
