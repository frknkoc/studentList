package com.furkan.studentListBackEnd.service;

import com.furkan.studentListBackEnd.model.Student;

import java.util.List;


public interface IStudentService {
    Student addStudent(Student student);
    List<Student> getStudents();

    Student updateStudent(Student student, int id);
    Student getStudentById(int id);
    void deleteStudent(int id);
}
