package com.winit.entity.pojo;

import java.util.Date;

import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Table(name = "items")
public class Item extends BaseEntity{
	
	private String name;
	
	 @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone="GMT+8")
	 @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private Date createTime;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	
	

}
