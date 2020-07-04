package com.winit.service;

import java.util.List;


import com.winit.entity.pojo.Consume;

public interface ConsumeService {

	void delete(Integer id);

	List<Consume> consumeList(Consume consume);

	int save(Consume consume);

	List<Consume> consumeALL(Consume consume);

	List<Consume> getConsumeStatistics(Consume consume);


	
}
