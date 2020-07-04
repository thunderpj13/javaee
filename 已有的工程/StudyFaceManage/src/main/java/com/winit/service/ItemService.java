package com.winit.service;

import java.util.List;


import com.winit.entity.pojo.Item;

public interface ItemService {



	void delete(Integer id);

	List<Item> itemList(Item item);

	int save(Item item);

	List<Item> itemALL(Item item);


	
}
