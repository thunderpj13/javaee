package com.winit.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.winit.entity.pojo.Attendance;
import com.winit.mapper.AttendanceMapper;
import com.winit.service.AttendanceService;

@Service
public class AttendanceServiceImpl implements AttendanceService {

	@Resource
	private AttendanceMapper attendanceMapper;
	@Override
	public List<Attendance> attendanceList(Attendance attendance) {
		PageHelper.startPage(attendance.getPage(),attendance.getRows());
		return attendanceMapper.attendanceList(attendance);
	}

	@Override
	public int save(Attendance attendance) {
		if(attendance.getId()!=null) {
			return attendanceMapper.updateByPrimaryKeySelective(attendance);
		}
		attendance.setCreateTime(new Date());
		return attendanceMapper.insertSelective(attendance);
	}
      
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		attendanceMapper.deletebyId(id);
	}

	@Override
	public List<Attendance> attendanceALL(Attendance attendance) {
		List<Attendance> list=attendanceMapper.getAll(attendance);
		return list;
	}

	@Override
	public List<Attendance> getAttendanceTotal(Attendance attendance) {
		List<Attendance> list=attendanceMapper.getAttendanceTotal(attendance);
		return list;
	}

	@Override
	public List<Attendance> getShouldAttendanceTotal(Attendance attendance) {
		List<Attendance> list=attendanceMapper.getShouldAttendanceTotal(attendance);
		return list;
	}
	
	
}
