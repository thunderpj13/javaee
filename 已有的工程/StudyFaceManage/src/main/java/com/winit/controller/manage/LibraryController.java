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
import com.winit.entity.pojo.Library;
import com.winit.service.LibraryService;

@RestController
@RequestMapping("/api/library")
public class LibraryController {

	@Autowired
	private LibraryService libraryService;
	
	@RequestMapping(value="/geLibraryList",method = RequestMethod.POST)
	public ResultDto list(Library library){
		PageDto<Library> pageDto = new PageDto<Library>();
		List<Library> list = libraryService.libraryList(library);
		PageInfo<Library> page = new PageInfo<Library>(list);
		pageDto.setTotal(page.getTotal());
		pageDto.setResult(list);
		return ResultUtil.success(pageDto, null);
	}
	@RequestMapping(value="/getAll",method = RequestMethod.POST)
	public ResultDto getAll(Library library){
		ResultDto resultDto=new ResultDto();
		List<Library> list = libraryService.libraryALL(library);
		if(list.size()>0) {
			resultDto.setResultCode("200");
			resultDto.setData(list);
		}
		return resultDto;
	}
	
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public ResultDto save(Library library){
		libraryService.save(library);
		return ResultUtil.success("保存成功");
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST)
	public ResultDto delete(Library library){
		List<Library> list = libraryService.libraryList(library);
		if(list.size()>0) {
			libraryService.delete(library.getId());
			 return ResultUtil.success("删除成功"); 
		}else {
			   return ResultUtil.fail("无法删除");  
		   }
	
			
}
	@RequestMapping(value = "/getLibraryStatistics", method = RequestMethod.POST)
	public ResultDto getLibraryStatistics(Library library){
		ResultDto resultDto=new ResultDto();
		Library lib=libraryService.getLibraryStatistics(library);
		resultDto.setData(lib);
		resultDto.setResultCode("200");
		return resultDto;
	}
}

