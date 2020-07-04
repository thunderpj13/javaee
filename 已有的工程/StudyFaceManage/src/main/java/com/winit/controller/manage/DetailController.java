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
import com.winit.entity.pojo.Detail;
import com.winit.service.DetailService;

@RestController
@RequestMapping("/api/detail")
public class DetailController {

	@Autowired
	private DetailService detailService;
	
	@RequestMapping(value="/geDetailList",method = RequestMethod.POST)
	public ResultDto list(Detail detail){
		PageDto<Detail> pageDto = new PageDto<Detail>();
		List<Detail> list = detailService.detailList(detail);
		PageInfo<Detail> page = new PageInfo<Detail>(list);
		pageDto.setTotal(page.getTotal());
		pageDto.setResult(list);
		return ResultUtil.success(pageDto, null);
	}
	@RequestMapping(value="/getAll",method = RequestMethod.POST)
	public ResultDto getAll(Detail detail){
		ResultDto resultDto=new ResultDto();
		List<Detail> list = detailService.detailALL(detail);
		if(list.size()>0) {
			resultDto.setResultCode("200");
			resultDto.setData(list);
		}
		return resultDto;
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResultDto save(Detail detail){
		detailService.save(detail);
		return ResultUtil.success("保存成功");
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST)
	public ResultDto delete(Detail detail){
		List<Detail> list = detailService.detailList(detail);
		if(list.size()>0) {
			detailService.delete(detail.getId());
			 return ResultUtil.success("删除成功"); 
		}else {
			   return ResultUtil.fail("无法删除");  
		   }
	
			
}
}

