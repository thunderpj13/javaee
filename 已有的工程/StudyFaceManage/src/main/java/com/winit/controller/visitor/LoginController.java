package com.winit.controller.visitor;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.winit.common.utils.SessionUtil;
import com.winit.entity.pojo.User;
import com.winit.service.UserService;


/**
 * 登录控制器
 * @author 555
 *
 */
@Controller
@RequestMapping("web/visitor")
public class LoginController {

	
	@Autowired
	private UserService userService;

	
	@RequestMapping(value = "/toLogin")
	public ModelAndView toLogin(ModelAndView view,HttpSession session){
		view.setViewName("login");
		return view;
	}

	/**
	 * 用户登录
	 */
	@RequestMapping(value = "/userLogin")
	public @ResponseBody Map<String,Object> userLogin(User cspUser,HttpSession session) {
		Map<String,Object>  map=new HashMap<String,Object>();
		try{
			map = userService.userLogin(cspUser,session);
		}catch(Exception e){
			e.printStackTrace();
			map.put("flag", false);
			map.put("resultMsg", "系统异常");
		}
		return map;
	}
	
	
	


}
