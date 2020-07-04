package com.winit.mapper;

import java.util.List;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Detail;

public interface DetailMapper extends MyMapper<Detail>{

	List<Detail> detailList(Detail detail);

	void deletebyId(Integer id);

	List<Detail> getAll(Detail detail);

}
