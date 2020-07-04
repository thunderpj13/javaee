package com.winit.controller.manage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.winit.entity.dto.ResultDto;
import com.winit.entity.pojo.Statistics;
import com.winit.service.StatisticsService;

@RestController
@RequestMapping("/api/Statistics")
public class StatisticsController {
	
	@Autowired
	private StatisticsService statisticsService;
	
	
	@RequestMapping(value="/geStatistic",method = RequestMethod.POST)
	public ResultDto getAll(Statistics statistic){
		List<Statistics> sa=statisticsService.selectRecord(statistic);
		ResultDto resultDto=new ResultDto();
		resultDto.setData(sa);
		resultDto.setResultCode("200");
		return resultDto;
	}
	


}
