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
import com.winit.entity.pojo.Attendance;
import com.winit.service.AttendanceService;

@RestController
@RequestMapping("/api/Attendance")
public class AttendanceController {

	@Autowired
	private AttendanceService attendanceService;
	
	@RequestMapping(value="/geAttendanceList",method = RequestMethod.POST)
	public ResultDto list(Attendance attendance){
		PageDto<Attendance> pageDto = new PageDto<Attendance>();
		List<Attendance> list = attendanceService.attendanceList(attendance);
		PageInfo<Attendance> page = new PageInfo<Attendance>(list);
		pageDto.setTotal(page.getTotal());
		pageDto.setResult(list);
		return ResultUtil.success(pageDto, null);
	}
	@RequestMapping(value="/getAll",method = RequestMethod.POST)
	public ResultDto getAll(Attendance attendance){
		ResultDto resultDto=new ResultDto();
		List<Attendance> list = attendanceService.attendanceALL(attendance);
		if(list.size()>0) {
			resultDto.setResultCode("200");
			resultDto.setData(list);
		}
		return resultDto;
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResultDto save(Attendance attendance){
		attendanceService.save(attendance);
		return ResultUtil.success("保存成功");
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST)
	public ResultDto delete(Attendance attendance){
		List<Attendance> list = attendanceService.attendanceList(attendance);
		if(list.size()>0) {
			attendanceService.delete(attendance.getId());
			 return ResultUtil.success("删除成功"); 
		}else {
			   return ResultUtil.fail("无法删除");  
		   }	
}
	@RequestMapping(value = "/getAttendanceTotal", method = RequestMethod.POST)
	public ResultDto getAttendanceTotal(Attendance attendance){
		ResultDto resultDto=new ResultDto();
		List<Attendance> list=attendanceService.getAttendanceTotal(attendance);
		resultDto.setData(list);
		resultDto.setResultCode("200");
		return resultDto;
	}
	@RequestMapping(value = "/getShouldAttendanceTotal", method = RequestMethod.POST)
	public ResultDto getShouldAttendanceTotal(Attendance attendance){
		ResultDto resultDto=new ResultDto();
		List<Attendance> list=attendanceService.getShouldAttendanceTotal(attendance);
		resultDto.setData(list);
		resultDto.setResultCode("200");
		return resultDto;
	}
}

