package com.winit.service;

import java.util.List;

import com.winit.entity.pojo.Score;

public interface ScoreService {

	void delete(Integer id);

	List<Score> scoreList(Score score);

	int save(Score score);

	List<Score> scoreALL(Score score);

	List<Score> getScoreStatistics(Score score);


	
}
