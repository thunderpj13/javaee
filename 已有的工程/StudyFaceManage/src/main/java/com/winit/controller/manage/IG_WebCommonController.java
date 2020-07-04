package com.winit.controller.manage;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("web/manage")
public class IG_WebCommonController {
	
	/**
	 * @return
	 */
	@RequestMapping(value = "/logout")
	public ModelAndView invalidateSession(HttpSession session,ModelAndView view) {
		session.invalidate();
		view.setViewName("login");
		return view;
	}
	
	@RequestMapping(value = "/toUserinfo")
	public ModelAndView toUserinfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_UserInfo");
		return view;
	}
	@RequestMapping(value = "/toItemInfo")
	public ModelAndView toItemInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Item");
		return view;
	}
	@RequestMapping(value = "/toCourseInfo")
	public ModelAndView toCourseInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Course");
		return view;
	}
	@RequestMapping(value = "/toDetailInfo")
	public ModelAndView toDetailInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Detail");
		return view;
	}
	@RequestMapping(value = "/toConsumeInfo")
	public ModelAndView toConsumeInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Consume");
		return view;
	}
	@RequestMapping(value = "/toAttedanceInfo")
	public ModelAndView toAttedanceInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Attendance");
		return view;
	}
	@RequestMapping(value = "/toLibraryInfo")
	public ModelAndView toLibraryInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Library");
		return view;
	}
	@RequestMapping(value = "/toScoreInfo")
	public ModelAndView toScoreInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Score");
		return view;
	}
	@RequestMapping(value = "/toStudentInfo")
	public ModelAndView toStudentInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Student");
		return view;
	}
	@RequestMapping(value = "/todecribleInfo")
	public ModelAndView todecribleInfo(HttpSession session,ModelAndView view) {
		view.setViewName("manage/IG_Statistics");
		return view;
	}
	
	

}
