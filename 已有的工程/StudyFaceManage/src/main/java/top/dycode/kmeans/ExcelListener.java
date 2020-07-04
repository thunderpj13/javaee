package top.dycode.kmeans;

import java.lang.reflect.Array;
import java.util.ArrayList;
//import java.util.List;
 
import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.event.AnalysisEventListener;
 
public class ExcelListener extends AnalysisEventListener {
 
	private ArrayList<Object>  data = new ArrayList<Object>();
	
	@Override
	public void doAfterAllAnalysed(AnalysisContext arg0) {
//		data.clear();//解析结束后销毁资源，（疑惑，clear()好像不能测地回收内存。）
	}
 
	@Override
	public void invoke(Object object, AnalysisContext context) {
//        System.out.println("当前行："+context.getCurrentRowNum());
//        System.out.println(context.getCurrentRowAnalysisResult());
//        System.out.println(object);
        data.add(object);//数据存储到list，供批量处理，或者自己后续的业务处理
        doSomething(object);//根据自己的是业务而处理（就是用service层保存到数据库了）
       
		
	}
	
	public ArrayList<Object> getData(){
		return this.data;
	}
	
    public void doSomething(Object object){

    	
    }
 
}
