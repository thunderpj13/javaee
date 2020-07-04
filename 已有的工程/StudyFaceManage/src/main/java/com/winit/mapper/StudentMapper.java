package com.winit.mapper;

import java.util.List;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Student;

public interface StudentMapper extends MyMapper<Student>{

	List<Student> studentList(Student student);

	void deletebyId(Integer id);

	List<Student> getAll(Student student);

}
