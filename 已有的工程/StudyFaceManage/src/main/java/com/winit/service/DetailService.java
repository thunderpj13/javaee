package com.winit.service;

import java.util.List;


import com.winit.entity.pojo.Detail;

public interface DetailService {



	void delete(Integer id);

	List<Detail> detailList(Detail detail);

	int save(Detail detail);

	List<Detail> detailALL(Detail detail);


	
}
