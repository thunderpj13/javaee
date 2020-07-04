package com.winit.mapper;

import java.util.List;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Item;

public interface ItemMapper extends MyMapper<Item>{

	List<Item> itemList(Item item);

	void deletebyId(Integer id);

	List<Item> getAll(Item item);

}
