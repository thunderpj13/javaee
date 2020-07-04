package com.winit.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.winit.entity.pojo.Statistics;
import com.winit.entity.pojo.Student;
import com.winit.mapper.StatisticsMapper;
import com.winit.service.StatisticsService;

@Service
public class StatisticsServiceImpl implements StatisticsService{

	@Resource
	private StatisticsMapper statisticeMapper;
	@Override
	public List<Statistics> selectRecord(Statistics statistic) {
		String consumeTotal=statisticeMapper.selectConsumeTotal(statistic);
		String scoreTotal=statisticeMapper.selectScoreTotal(statistic);
		String  libraryTotal=statisticeMapper.selectLibraryTotal(statistic);
		String  attenceDanTotal=statisticeMapper.selectAttendanceTotal(statistic);
		Student stu=statisticeMapper.selectstu(statistic);
		statistic.setConsumeTotal(consumeTotal);
		statistic.setScoreTotal(scoreTotal);
		statistic.setLibraryTotal(libraryTotal);
		statistic.setAttendanceTotal(attenceDanTotal);
		statistic.setStu(stu);
		List<Statistics> list=new ArrayList<Statistics>();
		list.add(statistic);
		return list;
	}

}
