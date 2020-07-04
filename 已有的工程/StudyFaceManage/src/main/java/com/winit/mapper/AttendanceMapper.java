package com.winit.mapper;

import java.util.List;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Attendance;

public interface AttendanceMapper extends MyMapper<Attendance>{

	List<Attendance> attendanceList(Attendance attendance);

	void deletebyId(Integer id);

	List<Attendance> getAll(Attendance attendance);

	List<Attendance> getAttendanceTotal(Attendance attendance);
	
	List<Attendance> getShouldAttendanceTotal(Attendance attendance);

}
