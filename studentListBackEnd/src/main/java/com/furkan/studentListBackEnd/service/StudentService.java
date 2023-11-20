package com.furkan.studentListBackEnd.service;

import com.furkan.studentListBackEnd.exception.StudentAlreadyExistsException;
import com.furkan.studentListBackEnd.exception.StudentNotFoundException;
import com.furkan.studentListBackEnd.model.Student;
import com.furkan.studentListBackEnd.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService{
    private final StudentRepository studentRepository;

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
    @Override
    public Student addStudent(Student student) {
        if (studentAlreadyExists(student.getEmail())){
            throw new StudentAlreadyExistsException(student.getEmail() + " already exists!");
        }
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student, int id) {
        return studentRepository.findById(id).map(st -> {
            st.setFirstName(student.getFirstName());
            st.setLastName(student.getLastName());
            st.setEmail(student.getEmail());
            st.setDepartmant(student.getDepartmant());
            return studentRepository.save(st);
        }).orElseThrow(() -> new StudentNotFoundException("Sorry, this student could not be found with this id : " + id ));
    }

    @Override
    public Student getStudentById(int id) {
        return studentRepository.findById(id).orElseThrow(
                () -> new StudentNotFoundException("Sorry, this student could not be found")
        );
    }

    @Override
    public void deleteStudent(int id) {
        if (!studentRepository.existsById(id)){
            throw new StudentNotFoundException("Sorry, this student could not be found");
        }
        studentRepository.deleteById(id);
    }

    private boolean studentAlreadyExists(String email) {
        return studentRepository.findByEmail(email).isPresent();
    }
}
