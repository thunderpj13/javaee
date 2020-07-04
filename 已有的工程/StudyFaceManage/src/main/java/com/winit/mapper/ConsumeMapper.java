package com.winit.mapper;

import java.util.List;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Consume;

public interface ConsumeMapper extends MyMapper<Consume>{

	List<Consume> consumeList(Consume consume);

	void deletebyId(Integer id);

	List<Consume> getAll(Consume consume);

	List<Consume> getConsumeStatistics(Consume consume);

}
