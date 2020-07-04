package com.winit.controller.manage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageInfo;
import com.winit.common.baseclass.PageDto;
import com.winit.common.baseclass.ResultUtil;
import com.winit.entity.dto.ResultDto;
import com.winit.entity.pojo.Student;
import com.winit.service.StudentService;

@RestController
@RequestMapping("/api/student")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@RequestMapping(value="/geStudentList",method = RequestMethod.POST)
	public ResultDto list(Student student){
		PageDto<Student> pageDto = new PageDto<Student>();
		List<Student> list = studentService.studentList(student);
		PageInfo<Student> page = new PageInfo<Student>(list);
		pageDto.setTotal(page.getTotal());
		pageDto.setResult(list);
		return ResultUtil.success(pageDto, null);
	}
	@RequestMapping(value="/getAll",method = RequestMethod.POST)
	public ResultDto getAll(Student student){
		ResultDto resultDto=new ResultDto();
		List<Student> list = studentService.studentALL(student);
		if(list.size()>0) {
			resultDto.setResultCode("200");
			resultDto.setData(list);
		}
		return resultDto;
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResultDto save(Student student){
		studentService.save(student);
		return ResultUtil.success("保存成功");
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST)
	public ResultDto delete(Student student){
		List<Student> list = studentService.studentList(student);
		if(list.size()>0) {
			studentService.delete(student.getId());
			 return ResultUtil.success("删除成功"); 
		}else {
			   return ResultUtil.fail("无法删除");  
		   }
	
			
}
}

