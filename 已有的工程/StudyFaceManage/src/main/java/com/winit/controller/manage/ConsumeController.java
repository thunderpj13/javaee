package com.winit.controller.manage;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.pagehelper.PageInfo;
import com.winit.common.baseclass.PageDto;
import com.winit.common.baseclass.ResultUtil;
import com.winit.entity.dto.ResultDto;
import com.winit.entity.pojo.Consume;
import com.winit.service.ConsumeService;

@RestController
@RequestMapping("/api/consume")
public class ConsumeController {

	@Autowired
	private ConsumeService consumeService;
	
	@RequestMapping(value="/geConsumeList",method = RequestMethod.POST)
	public ResultDto list(Consume consume){
		PageDto<Consume> pageDto = new PageDto<Consume>();
		List<Consume> list = consumeService.consumeList(consume);
		PageInfo<Consume> page = new PageInfo<Consume>(list);
		pageDto.setTotal(page.getTotal());
		pageDto.setResult(list);
		return ResultUtil.success(pageDto, null);
	}
	@RequestMapping(value="/getAll",method = RequestMethod.POST)
	public ResultDto getAll(Consume consume){
		ResultDto resultDto=new ResultDto();
		List<Consume> list = consumeService.consumeALL(consume);
		if(list.size()>0) {
			resultDto.setResultCode("200");
			resultDto.setData(list);
		}
		return resultDto;
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResultDto save(Consume consume){
		consumeService.save(consume);
		return ResultUtil.success("保存成功");
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST)
	public ResultDto delete(Consume consume){
		List<Consume> list = consumeService.consumeList(consume);
		if(list.size()>0) {
			consumeService.delete(consume.getId());
			 return ResultUtil.success("删除成功"); 
		}else {
			   return ResultUtil.fail("无法删除");  
		   }		
}
	@RequestMapping(value = "/getConsumeStatistics", method = RequestMethod.POST)
	public ResultDto getConsumeStatistics(Consume consume){
		ResultDto resultDto=new ResultDto();
		List<Consume> list=consumeService.getConsumeStatistics(consume);
		resultDto.setData(list);
		resultDto.setResultCode("200");
		return resultDto;
	}
}

