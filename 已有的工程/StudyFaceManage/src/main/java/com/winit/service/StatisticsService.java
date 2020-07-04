package com.winit.service;

import java.util.List;

import com.winit.entity.pojo.Statistics;

public interface StatisticsService {

	List<Statistics> selectRecord(Statistics statistic);

}
