package com.winit.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.winit.entity.pojo.Course;
import com.winit.mapper.CourseMapper;
import com.winit.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

	@Resource
	private CourseMapper courseMapper;
	@Override
	public List<Course> courseList(Course course) {
		PageHelper.startPage(course.getPage(),course.getRows());
		return courseMapper.courseList(course);
	}

	@Override
	public int save(Course course) {
		if(course.getId()!=null) {
			return courseMapper.updateByPrimaryKeySelective(course);
		}
		course.setCreateTime(new Date());
		return courseMapper.insertSelective(course);
	}
      
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		courseMapper.deletebyId(id);
	}

	@Override
	public List<Course> courseALL(Course course) {
		List<Course> list=courseMapper.getAll(course);
		return list;
	}
	
	
}
