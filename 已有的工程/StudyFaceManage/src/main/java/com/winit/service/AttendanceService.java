package com.winit.service;

import java.util.List;


import com.winit.entity.pojo.Attendance;

public interface AttendanceService {



	void delete(Integer id);

	List<Attendance> attendanceList(Attendance attendance);

	int save(Attendance attendance);

	List<Attendance> attendanceALL(Attendance attendance);


	List<Attendance> getAttendanceTotal(Attendance attendance);

	List<Attendance> getShouldAttendanceTotal(Attendance attendance);


	
}
