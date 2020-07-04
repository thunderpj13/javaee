package com.winit.controller.manage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageInfo;
import com.winit.common.baseclass.PageDto;
import com.winit.common.baseclass.ResultUtil;
import com.winit.entity.dto.ResultDto;
import com.winit.entity.pojo.Score;
import com.winit.service.ScoreService;

@RestController
@RequestMapping("/api/score")
public class ScoreController {

	@Autowired
	private ScoreService scoreService;
	
	@RequestMapping(value="/geScoreList",method = RequestMethod.POST)
	public ResultDto list(Score score){
		PageDto<Score> pageDto = new PageDto<Score>();
		List<Score> list = scoreService.scoreList(score);
		PageInfo<Score> page = new PageInfo<Score>(list);
		pageDto.setTotal(page.getTotal());
		pageDto.setResult(list);
		return ResultUtil.success(pageDto, null);
	}
	@RequestMapping(value="/getAll",method = RequestMethod.POST)
	public ResultDto getAll(Score score){
		ResultDto resultDto=new ResultDto();
		List<Score> list = scoreService.scoreALL(score);
		if(list.size()>0) {
			resultDto.setResultCode("200");
			resultDto.setData(list);
		}
		return resultDto;
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResultDto save(Score score){
		scoreService.save(score);
		return ResultUtil.success("保存成功");
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST)
	public ResultDto delete(Score score){
		List<Score> list = scoreService.scoreList(score);
		if(list.size()>0) {
			scoreService.delete(score.getId());
			 return ResultUtil.success("删除成功"); 
		}else {
			   return ResultUtil.fail("无法删除");  
		   }
	
			
}
	@RequestMapping(value = "/getScoreStatistics", method = RequestMethod.POST)
	public ResultDto getScoreStatistics(Score score){
		ResultDto resultDto=new ResultDto();
		List<Score> list=scoreService.getScoreStatistics(score);
		resultDto.setData(list);
		resultDto.setResultCode("200");
		return resultDto;
	}
}

