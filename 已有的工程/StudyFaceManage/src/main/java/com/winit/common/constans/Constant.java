package com.winit.common.constans;

public class Constant {
	
	
	public  static enum RESULT_CODE{
		/**
		 * 成功
		 */
		SUCCESS("200"),
		/**
		 * 失败
		 */
		FAIL("400"),
		/**
		 *异常
		 */
		EXCEPTION("500"),
		/**
		 * 没登录
		 */
		NOT_LOGIN("401"),
		/**
		 * 没权限
		 */
		NOT_AUTH("403"),
		/**
		 * 找不到资源
		 */
		ERROR_404("404"),
		/**
		 * 长时间未登录
		 */
		LOGN_TIME_NOT_LOGIN("408"),
		/**
		 * 另一个地方登录(踢出)
		 */
		ANTHER_PLACE_LOGIN("409");
		
		private  String resultCode;
		
		RESULT_CODE(String resultCode){
			this.resultCode=resultCode;
		}

		public String getResultCode() {
			return resultCode;
		}

	
		
	}
	
	/**
	 * 通用的是否状态
	 * 
	 * @author
	 *
	 */
	public static enum GENERAL_WHETHER {
		/**
		 * 1是
		 */
		YES("1"),
		/**
		 * 0否
		 */
		NO("0");

		private String state;

		GENERAL_WHETHER(String state) {
			this.state = state;
		}

		public String getState() {
			return state;
		}
	}
	
	
	

	
	

}
