package com.winit.mapper;

import java.util.List;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Course;

public interface CourseMapper extends MyMapper<Course>{

	List<Course> courseList(Course course);

	void deletebyId(Integer id);

	List<Course> getAll(Course course);

}
