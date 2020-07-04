package com.winit.mapper;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Statistics;
import com.winit.entity.pojo.Student;

public interface StatisticsMapper extends MyMapper<Statistics>{



	String selectConsumeTotal(Statistics statistic);

	String selectScoreTotal(Statistics statistic);

	String selectLibraryTotal(Statistics statistic);

	String selectAttendanceTotal(Statistics statistic);

	Student selectstu(Statistics statistic);

}
