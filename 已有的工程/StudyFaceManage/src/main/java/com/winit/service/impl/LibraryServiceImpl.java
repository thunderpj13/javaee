package com.winit.service.impl;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.winit.entity.pojo.Library;
import com.winit.mapper.LibraryMapper;
import com.winit.service.LibraryService;

@Service
public class LibraryServiceImpl implements LibraryService {

	@Resource
	private LibraryMapper libraryMapper;
	@Override
	public List<Library> libraryList(Library library) {
		PageHelper.startPage(library.getPage(),library.getRows());
		return libraryMapper.libraryList(library);
	}

	@Override
	public int save(Library library) {
		if(library.getId()!=null) {
			return libraryMapper.updateByPrimaryKeySelective(library);
		}
		library.setCreateTime(new Date());
		return libraryMapper.insertSelective(library);
	}
      
	@Override
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		libraryMapper.deletebyId(id);
	}

	@Override
	public List<Library> libraryALL(Library library) {
		List<Library> list=libraryMapper.getAll(library);
		return list;
	}



	@Override
	public Library getLibraryStatistics(Library library) {
		Library lib=libraryMapper.getLibraryStatistics(library);
		return lib;
	}


	
	
}
