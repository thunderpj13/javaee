package com.winit.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.winit.entity.pojo.Score;
import com.winit.mapper.ScoreMapper;
import com.winit.service.ScoreService;

@Service
public class ScoreServiceImpl implements ScoreService {

	@Resource
	private ScoreMapper scoreMapper;
	@Override
	public List<Score> scoreList(Score score) {
		PageHelper.startPage(score.getPage(),score.getRows());
		return scoreMapper.scoreList(score);
	}

	@Override
	public int save(Score score) {
		if(score.getId()!=null) {
			return scoreMapper.updateByPrimaryKeySelective(score);
		}
		score.setCreateTime(new Date());
		return scoreMapper.insertSelective(score);
	}
      
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		scoreMapper.deletebyId(id);
	}

	@Override
	public List<Score> scoreALL(Score score) {
		List<Score> list=scoreMapper.getAll(score);
		return list;
	}

	@Override
	public List<Score> getScoreStatistics(Score score) {
		List<Score> list=scoreMapper.getScoreStatistics(score);
		return list;
	}

	
	
	
}
