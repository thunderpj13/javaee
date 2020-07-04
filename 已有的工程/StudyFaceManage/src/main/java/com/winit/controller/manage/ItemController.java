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
import com.winit.entity.pojo.Item;
import com.winit.service.ItemService;

@RestController
@RequestMapping("/api/item")
public class ItemController {

	@Autowired
	private ItemService itemService;
	
	@RequestMapping(value="/geItemList",method = RequestMethod.POST)
	public ResultDto list(Item item){
		PageDto<Item> pageDto = new PageDto<Item>();
		List<Item> list = itemService.itemList(item);
		PageInfo<Item> page = new PageInfo<Item>(list);
		pageDto.setTotal(page.getTotal());
		pageDto.setResult(list);
		return ResultUtil.success(pageDto, null);
	}
	@RequestMapping(value="/getAll",method = RequestMethod.POST)
	public ResultDto getAll(Item item){
		ResultDto resultDto=new ResultDto();
		List<Item> list = itemService.itemALL(item);
		if(list.size()>0) {
			resultDto.setResultCode("200");
			resultDto.setData(list);
		}
		return resultDto;
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResultDto save(Item item){
		itemService.save(item);
		return ResultUtil.success("保存成功");
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST)
	public ResultDto delete(Item item){
		List<Item> list = itemService.itemList(item);
		if(list.size()>0) {
			itemService.delete(item.getId());
			 return ResultUtil.success("删除成功"); 
		}else {
			   return ResultUtil.fail("无法删除");  
		   }
	
			
}
}

