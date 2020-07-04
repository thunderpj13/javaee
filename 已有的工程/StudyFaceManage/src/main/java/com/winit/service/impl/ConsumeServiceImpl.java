package com.winit.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.winit.entity.pojo.Consume;
import com.winit.mapper.ConsumeMapper;
import com.winit.service.ConsumeService;

@Service
public class ConsumeServiceImpl implements ConsumeService {

	@Resource
	private ConsumeMapper consumeMapper;
	@Override
	public List<Consume> consumeList(Consume consume) {
		PageHelper.startPage(consume.getPage(),consume.getRows());
		return consumeMapper.consumeList(consume);
	}

	@Override
	public int save(Consume consume) {
		if(consume.getId()!=null) {
			return consumeMapper.updateByPrimaryKeySelective(consume);
		}
		consume.setCreateTime(new Date());
		return consumeMapper.insertSelective(consume);
	}
      
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		consumeMapper.deletebyId(id);
	}

	@Override
	public List<Consume> consumeALL(Consume consume) {
		List<Consume> list=consumeMapper.getAll(consume);
		return list;
	}

	@Override
	public List<Consume> getConsumeStatistics(Consume consume) {
		List<Consume> list=consumeMapper.getConsumeStatistics(consume);
		return list;
	}
	
	
}
