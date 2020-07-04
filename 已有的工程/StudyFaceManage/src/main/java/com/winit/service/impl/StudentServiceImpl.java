package com.winit.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.winit.entity.pojo.Student;
import com.winit.mapper.StudentMapper;
import com.winit.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

	@Resource
	private StudentMapper studentMapper;
	@Override
	public List<Student> studentList(Student student) {
		PageHelper.startPage(student.getPage(),student.getRows());
		return studentMapper.studentList(student);
	}

	@Override
	public int save(Student student) {
		if(student.getId()!=null) {
			return studentMapper.updateByPrimaryKeySelective(student);
		}
		student.setCreateTime(new Date());
		return studentMapper.insertSelective(student);
	}
      
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		studentMapper.deletebyId(id);
	}

	@Override
	public List<Student> studentALL(Student student) {
		List<Student> list=studentMapper.getAll(student);
		return list;
	}
	
	
}
