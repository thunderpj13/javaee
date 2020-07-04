package com.winit.service;

import java.util.List;


import com.winit.entity.pojo.Course;

public interface CourseService {



	void delete(Integer id);

	List<Course> courseList(Course course);

	int save(Course course);

	List<Course> courseALL(Course course);


	
}
