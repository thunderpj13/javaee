package com.winit.mapper;

import java.util.List;

import com.winit.common.baseclass.MyMapper;
import com.winit.entity.pojo.Library;

public interface LibraryMapper extends MyMapper<Library>{

	List<Library> libraryList(Library library);

	void deletebyId(Integer id);

	List<Library> getAll(Library library);

	Library getLibraryStatistics(Library library);

}
