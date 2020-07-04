package com.winit.entity.pojo;

import java.util.Date;

import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Table(name = "attendances")
public class Attendance extends BaseEntity{
	
	private Integer stuId;
	
	private Integer detailId;
	
	 @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
	 @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date createTime;
	 
	 @Transient 
	 private String stuName;
	 @Transient 
	 private String courseName;
	 @Transient 
	 private String number;
	 @Transient 
	 private String attendanceTotal;//出勤总数
	 @Transient 
	 private String  shouldAttenTotal;//应该出勤总数
	 
	 private Integer courseId;

	 

	public Integer getStuId() {
		return stuId;
	}

	public void setStuId(Integer stuId) {
		this.stuId = stuId;
	}

	public Integer getDetailId() {
		return detailId;
	}

	public void setDetailId(Integer detailId) {
		this.detailId = detailId;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getStuName() {
		return stuName;
	}

	public void setStuName(String stuName) {
		this.stuName = stuName;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getAttendanceTotal() {
		return attendanceTotal;
	}

	public void setAttendanceTotal(String attendanceTotal) {
		this.attendanceTotal = attendanceTotal;
	}

	public String getShouldAttenTotal() {
		return shouldAttenTotal;
	}

	public void setShouldAttenTotal(String shouldAttenTotal) {
		this.shouldAttenTotal = shouldAttenTotal;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}


	

}
