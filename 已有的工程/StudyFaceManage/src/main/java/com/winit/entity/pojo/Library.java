package com.winit.entity.pojo;

import java.util.Date;

import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Table(name = "librarys")
public class Library extends BaseEntity{

	private Integer stuId;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
	 @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date startTime;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
	 @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date endTime;
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
	 @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date createTime;
	@Transient 
	private String stuName;
	@Transient
	private String hoursum;
	@Transient
	private String number;

	public Integer getStuId() {
		return stuId;
	}

	public void setStuId(Integer stuId) {
		this.stuId = stuId;
	}

	public Date getStartTime() {
		return startTime;
	}

	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}

	public Date getEndTime() {
		return endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
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

	public String getHoursum() {
		return hoursum;
	}

	public void setHoursum(String hoursum) {
		this.hoursum = hoursum;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}
	
	
}
