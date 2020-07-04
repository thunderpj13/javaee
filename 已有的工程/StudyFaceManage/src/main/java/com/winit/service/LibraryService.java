package com.winit.service;

import java.util.List;


import com.winit.entity.pojo.Library;

public interface LibraryService {



	void delete(Integer id);

	List<Library> libraryList(Library library);

	int save(Library library);

	List<Library> libraryALL(Library library);

	Library getLibraryStatistics(Library library);


	
}
