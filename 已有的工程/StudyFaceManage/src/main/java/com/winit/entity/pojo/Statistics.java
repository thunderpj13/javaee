package com.winit.entity.pojo;

public class Statistics extends BaseEntity{

	private Student stu;
	
	private String consumeTotal;
	
	private String attendanceTotal;
	
	private String scoreTotal;
	
	private String libraryTotal;
	
	private String stuId;

	public String getConsumeTotal() {
		return consumeTotal;
	}

	public void setConsumeTotal(String consumeTotal) {
		this.consumeTotal = consumeTotal;
	}



	public String getScoreTotal() {
		return scoreTotal;
	}

	public void setScoreTotal(String scoreTotal) {
		this.scoreTotal = scoreTotal;
	}

	public String getLibraryTotal() {
		return libraryTotal;
	}

	public void setLibraryTotal(String libraryTotal) {
		this.libraryTotal = libraryTotal;
	}



	public String getAttendanceTotal() {
		return attendanceTotal;
	}

	public void setAttendanceTotal(String attendanceTotal) {
		this.attendanceTotal = attendanceTotal;
	}

	public Student getStu() {
		return stu;
	}

	public void setStu(Student stu) {
		this.stu = stu;
	}

	public String getStuId() {
		return stuId;
	}

	public void setStuId(String stuId) {
		this.stuId = stuId;
	}


	
	
}
