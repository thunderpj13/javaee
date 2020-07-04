package com.winit.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.winit.entity.pojo.Item;
import com.winit.mapper.ItemMapper;
import com.winit.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {

	@Resource
	private ItemMapper itemMapper;
	@Override
	public List<Item> itemList(Item item) {
		PageHelper.startPage(item.getPage(),item.getRows());
		return itemMapper.itemList(item);
	}

	@Override
	public int save(Item item) {
		if(item.getId()!=null) {
			return itemMapper.updateByPrimaryKeySelective(item);
		}
		item.setCreateTime(new Date());
		return itemMapper.insertSelective(item);
	}
      
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		itemMapper.deletebyId(id);
	}

	@Override
	public List<Item> itemALL(Item item) {
		List<Item> list=itemMapper.getAll(item);
		return list;
	}
	
	
}
