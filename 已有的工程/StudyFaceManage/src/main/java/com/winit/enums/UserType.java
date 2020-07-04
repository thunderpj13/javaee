package com.winit.enums;

public enum UserType {

	ADMIN(0, "管理员"),
	SUPERVISOR(1, "开发人员"),
	ASSESSMENT(2, "测试人员");

	
	private int value;
	private String remark;
	
	private UserType(int value, String remark){
		this.value = value;
		this.remark = remark;
	}
	
	public static UserType getByValue(int value){
		for(UserType userType : UserType.values()){
			if(userType.getValue() == value){
				return userType;
			}
		}
		return null;
	}
	
	public int getValue(){
		return value;
	}
	
	public String getRemark(){
		return remark;
	}

}
