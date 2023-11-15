package com.furkan.studentListBackEnd.controller;

import com.furkan.studentListBackEnd.model.Student;
import com.furkan.studentListBackEnd.service.IStudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {
    private final IStudentService studentService;
    @GetMapping
    public ResponseEntity<List<Student>> getStudent(){
        return new ResponseEntity<>(studentService.getAllStudents(), HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }

    @PutMapping("/update/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable int id){
        return studentService.updateStudent(student, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable int id){
        studentService.deleteStudent(id);
    }

    @GetMapping("/student/{id}")
    public Student getStudentById(@PathVariable int id){
        return studentService.getStudentById(id);
    }
}