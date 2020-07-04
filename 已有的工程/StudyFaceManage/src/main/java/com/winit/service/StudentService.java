package com.winit.service;

import java.util.List;


import com.winit.entity.pojo.Student;

public interface StudentService {

	void delete(Integer id);

	List<Student> studentList(Student student);

	int save(Student student);

	List<Student> studentALL(Student student);


	
}
