package com.winit.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.winit.entity.pojo.Detail;
import com.winit.mapper.DetailMapper;
import com.winit.service.DetailService;

@Service
public class DetailServiceImpl implements DetailService {

	@Resource
	private DetailMapper detailMapper;
	@Override
	public List<Detail> detailList(Detail detail) {
		PageHelper.startPage(detail.getPage(),detail.getRows());
		return detailMapper.detailList(detail);
	}

	@Override
	public int save(Detail detail) {
		if(detail.getId()!=null) {
			return detailMapper.updateByPrimaryKeySelective(detail);
		}
		detail.setCreateTime(new Date());
		return detailMapper.insertSelective(detail);
	}
      
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		detailMapper.deletebyId(id);
	}

	@Override
	public List<Detail> detailALL(Detail detail) {
		List<Detail> list=detailMapper.getAll(detail);
		return list;
	}
	
	
}
