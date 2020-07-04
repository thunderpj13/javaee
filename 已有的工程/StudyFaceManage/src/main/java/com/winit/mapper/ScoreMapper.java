package com.winit.mapper;

import java.util.List;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Score;

public interface ScoreMapper extends MyMapper<Score>{

	List<Score> scoreList(Score score);

	void deletebyId(Integer id);

	List<Score> getAll(Score score);

	List<Score> getScoreStatistics(Score score);

}
