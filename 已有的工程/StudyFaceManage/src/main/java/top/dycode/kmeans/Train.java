package top.dycode.kmeans;
import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Set;

import org.apache.poi.ss.formula.functions.T;

import com.alibaba.excel.EasyExcelFactory;
import com.alibaba.excel.metadata.Sheet;
 
public class Train {
	
	public ArrayList<float[]> readData(String file) throws IOException {
		 InputStream in = new BufferedInputStream(new FileInputStream(file));
	   	 ExcelListener excelListener = new ExcelListener();
	   	 try {
				
				EasyExcelFactory.readBySax(in, new Sheet(1, 0),excelListener);
			} catch (Exception e) {
			}finally {
				in.close();
			}
	       ArrayList<float[]> dataSet = new ArrayList<float[]>();      
	       for (int i = 1; i < excelListener.getData().size(); i++) {
	       	ArrayList<Object> temp =  (ArrayList)excelListener.getData().get(i);
	       	dataSet.add(new float[] { Float.valueOf((String) temp.get(1)) ,
	       							Float.valueOf((String) temp.get(2)),
	       							Float.valueOf((String) temp.get(3)),
	       							Float.valueOf((String) temp.get(4)) });
			}
	       return dataSet;
	}
 
    public static void main(String[] args) throws IOException {
    	 
        KMeansRun kRun =new KMeansRun(4, new Train().readData("dataset.xlsx"));
 
        Set<Cluster> clusterSet = kRun.run();
//        System.out.println("单次迭代运行次数："+kRun.getIterTimes());
//        for (Cluster cluster : clusterSet) {
//            System.out.println(cluster);
//        }
        System.out.println(kRun.addPoint(clusterSet, new Point(new float [] {1, 2,3,4})).getId());
        
    }
}
