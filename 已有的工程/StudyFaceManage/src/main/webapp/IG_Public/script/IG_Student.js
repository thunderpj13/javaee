 var vm;


      $(function(){
    	
    	  initVue();
          vm.getJsonList();
      });
     
      function initVue(){  
    		vm = new Vue({
    	        el: '#vueBox',
    	        data:function(){
    	        	
    	             return {
    	            	  modal:false,
    	            	 
    	              param: {
    	            	  id:"",
    	            	  page: 1,
    	                  rows: 10
    	                },
    	                param1:{
    	                	  page: 1,
        	                  rows: 10
    	                },
    	                name:"",
    	                detailModel:false,
    	                consumeModel:false,
    	                attendanceModel:false,
    	                libraryModel:false,
    	                scoreModel:false,
    	                describleModel:false,
    	                attendanceList:[],
    	                library:{},
    	                shouldAttendanceList:[],
    	                scoreList:[],
    	                total:0,
    	                total1:0,
    	                detailform:{},
    	                columns1: [
               {
					type : 'index',
					title : '序号',
					align : 'center'
				},
				            { title: '学号',  key: 'number' },
                            { title: '学生名',  key: 'name' },
                            { title: '手机号',  key: 'phone' },
                            { title: '学年',  key: 'year' },
                            { title: '专业',  key: 'major' },
                            { title: '问题提示',  key: 'totalMoney' ,
                            	render: function (h, params) {	
                            		var totalMoney=parseInt(params.row.totalMoney);
                            		if(totalMoney<500){
                                   		return  h('span', '生活困难');
                                   	}		
                            	}
                            },
                            { title: '创建时间',  key: 'createTime' },
    	                    {
    	                        title: '操作',
    	                        key: 'action',
    	                        width: 240,
    	                        align: 'center',
    	                        render: function(h, params){   	
    	                       
    	                        		 return h('div', [
    	                        			  h('Button', {
             	                                    props: {
             	                                        type: 'primary',
             	                                        size: 'small'
             	                                    },
             	                                    style: {
             	                                        marginRight: '5px',
             	                                    },
             	                                    on: {
             	                                        click:function(){
             	                                        	vm.tijiao(params.row);
             	                                        }
             	                                    }
             	                                }, '修改'),
             	                               h('Button', {
           	                                    props: {
           	                                        type: 'primary',
           	                                        size: 'small'
           	                                    },
           	                                    style: {
           	                                        marginRight: '5px',
           	                                    },
           	                                    on: {
           	                                        click:function(){
           	                                        	vm.deleteRow(params.row);
           	                                        }
           	                                    }
           	                                }, '删除'),   
           	                             h('Button', {
        	                                    props: {
        	                                        type: 'primary',
        	                                        size: 'small'
        	                                    },
        	                                    style: {
        	                                        marginRight: '5px',
        	                                    },
        	                                    on: {
        	                                        click:function(){
        	                                        	vm.getConsumeStatistic(params.row);
        	                                        }
        	                                    }
        	                                }, '消费统计'),
        	                                h('Button', {
        	                                    props: {
        	                                        type: 'primary',
        	                                        size: 'small'
        	                                    },
        	                                    style: {
        	                                        marginRight: '5px',
        	                                    },
        	                                    on: {
        	                                        click:function(){
        	                                        	vm.toAttendance(params.row);
        	                                        }
        	                                    }
        	                                }, '出勤统计'),
        	                                h('Button', {
        	                                    props: {
        	                                        type: 'primary',
        	                                        size: 'small'
        	                                    },
        	                                    style: {
        	                                        marginRight: '5px',
        	                                    },
        	                                    on: {
        	                                        click:function(){
        	                                        	vm.getLibraryStatic(params.row);
        	                                        }
        	                                    }
        	                                }, '图书馆进出统计'),
        	                                h('Button', {
        	                                    props: {
        	                                        type: 'primary',
        	                                        size: 'small'
        	                                    },
        	                                    style: {
        	                                        marginRight: '5px',
        	                                    },
        	                                    on: {
        	                                        click:function(){
        	                                        	vm.getScoreList(params.row);
        	                                        }
        	                                    }
        	                                }, '成绩统计'),
        	                                h('Button', {
        	                                    props: {
        	                                        type: 'primary',
        	                                        size: 'small'
        	                                    },
        	                                    style: {
        	                                        marginRight: '5px',
        	                                    },
        	                                    on: {
        	                                        click:function(){
        	                                        	vm.getStatiscList(params.row);
        	                                        }
        	                                    }
        	                                }, '学生画像描述'),
    	                        	])
    	                        	
    	                   		}}], 
    	                        columns2: [
    	                                   {
    	                    					type : 'index',
    	                    					title : '序号',
    	                    					align : 'center'
    	                    				},
    	                                    { title: '一卡通消费',  key: 'consumeTotal' ,
    	                                    	render: function (h, params) {	
    	                                    		var counsumeTotal=parseInt(params.row.consumeTotal);
    	                                    		if(counsumeTotal<800){
    	                                           		return  h('span', counsumeTotal+'(勤俭节约)');
    	                                           	}else if(counsumeTotal>=800&&counsumeTotal<1200){
    	                                           		return  h('span', counsumeTotal+'(正常消费)');
    	                                           		
    	                                           	}else if(counsumeTotal>=1200&&counsumeTotal<=2000){
    	                                           		return  h('span',counsumeTotal+'(生活富足)');
    	                                           		
    	                                           	}else if(counsumeTotal>2000){
    	                                           		return  h('span',counsumeTotal+'(吃香喝辣)');
    	                                           		
    	                                           	}			
    	                                    	}
    	                                    },
    	                                    { title: '上课出勤',  key: 'attendanceTotal' ,
    	                                    	render: function (h, params) {	
    	                                    		var attendanceTotal=parseInt(params.row.attendanceTotal);
    	                                    		if(attendanceTotal<=5){
    	                                           		return  h('span', attendanceTotal+'(有挂科的风险)');
    	                                           	}else if(attendanceTotal>=6&&attendanceTotal<=13){
    	                                           		return  h('span', attendanceTotal+'(逃了很多次课)');
    	                                           		
    	                                           	}else if(attendanceTotal>=1400&&attendanceTotal<=19){
    	                                           		return  h('span',counsumeTotal+'(正常的上课出勤)');
    	                                           		
    	                                           	}else if(counsumeTotal>=20){
    	                                           		return  h('span',counsumeTotal+'(优秀的全勤)');
    	                                           		
    	                                           	}			
    	                                    	}
    	                                    },
    	                                    { title: '图书馆',  key: 'libraryTotal' ,
    	                                    	render: function (h, params) {	
    	                                    		var libraryTotal=parseInt(params.row.libraryTotal);
    	                                    		if(libraryTotal<=99){
    	                                           		return  h('span', libraryTotal+'(学习时间偏少)');
    	                                           	}else if(libraryTotal>=100&&libraryTotal<=200){
    	                                           		return  h('span', libraryTotal+'(学习时长正常)');
    	                                           		
    	                                           	}else if(libraryTotal>200){
    	                                           		return  h('span',libraryTotal+'(学习认真用功)');
    	                                           		
    	                                           	}	
    	                                    	}
    	                                    },
    	                                    { title: '成绩',  key: 'scoreTotal' ,
    	                                    	render: function (h, params) {	
    	                                    		var scoreTotal=parseInt(params.row.scoreTotal);
    	                                    		if(scoreTotal<60){
    	                                           		return  h('span',scoreTotal+'(少挂科，多学习)');
    	                                           	}else if(scoreTotal>=60&&scoreTotal<75){
    	                                           		return  h('span',scoreTotal+'(学习要努点力啊)');
    	                                           		
    	                                           	}else if(scoreTotal>=75&&scoreTotal<90){
    	                                           		return  h('span',scoreTotal+'(成绩良，继续保持，稳步上升)');
    	                                           		
    	                                           	}else if(scoreTotal>90){
    	                                           		return  h('span',scoreTotal+'(学霸，学习习惯良好)');
    	                                           		
    	                                           	}			
    	                                    	}
    	                                    },
    	                        	                 ],		
    	                   		
    	                   		
    	                   		
    	                   		
    	                   		
    	               data1:[],
    	               data2:[],
    	               formValidate: {
    	                  
    	                },
    	                value:''
    	                
    	            }
    	        },
    	        created:function(){
    	        	
    	        },
    	        mounted:function(){
   	        
   	        	
   	        },
    	        methods:{
    	        	
    	        	udrawline:function(obj){
    	        		debugger;
    	        	echarts.init(document.getElementById('myChart')).setOption({
    	        		    series : [
    	        		              {
    	        		           name:'消费分析',
    	        		           type:'pie',
    	        		           center: ['50%', '50%'],
    	        		           data:obj,
    	        		           itemStyle:{
    	        		        	   normal:{
    	        		        		   label:{
    	        		        		   show: true,
    	        		        		   formatter: '{b}:{c}({d}%)'
    	        		        		   },
    	        		        		   labelLine :{show:true}
    	        		        		   }
    	        		           }
    	        		            	  
    	        		            	  
    	        		            	  
    	        		              }       
    	        		              
    	        		              
    	        		              
    	        		              
    	        		              ]
    	        	     
    	        	        });
   	        	},
    	            
   	        	changePageNum: function (pageNum) {
    	              this.param.page = pageNum;
    	              this.getJsonList();
    	            },
    	        	changePageNum1: function (pageNum) {
      	              this.param1.page = pageNum;
      	              this.getStatiscList();
      	            },
    	           
    	          search:function(){
          	        	   this.param.page = 1;
        	        	   this.getJsonList();
        	       },
        	       tijiao:function(row){
	        	    	  vm.detailform={};
	        	    	  this.detailform.id=row.id;
	       	     	       this.detailform.name=row.name;
	       	     	       this.detailform.number=row.number;
	       	     	       this.detailform.phone=row.phone;
	       	               this.detailform.year=row.year;
	       	               this.detailform.major=row.major;
	       	     		   this.detailModel=true;
	       	     	   },
        	     deleteRow:function(row){
	       	          	 this.$Modal.confirm({
	     	                    title: '提示框',
	     	                    content: '<p>确定删除吗？</p>',
	     	                    onOk:function(){
	     	                    	$.ajax({
	     	    	                    type:"post",
	     	    	                    url:"api/student/delete",
	     	    	                    data:{"id":row.id},
	     	    	                    dataType:'json',
	     	    	                    async:false,
	     	    	                    success : function(data) {  
	     	    	                    	if(data.resultCode=='200'){
	     	    	                    		layer.msg('删除成功!');
    	     	    	                   		vm.getJsonList();
	     	    	                   	}else{
	     	    	                   		
	     	    	                   		 layer.msg(data.resultDesc);
	     	    	                   	}
	     	    	                     
	     	    	                    },
	     	    	                   error :function() {
	     	    	                	   layer.msg('删除失败！');
	     	    	                    }
	     	    	              	 });
	     	                    	
	     	                    }});
	     	        },
	     	     getConsumeStatistic:function(row){
	     	    	 debugger;
	     	    	 var stuId=row.id;
	     	    	$.ajax({
  	                  type:"post",
  	                  url:"api/consume/getConsumeStatistics",
  	                  data:{stuId:stuId},
  	                  dataType:'json',
  	                  async:true,
  	                  success:function(data) {    	                	  
  	                   if(data.resultCode==200){
  	                	   var data=data.data;
  	                	   var consumeArr=[];
  	                	   debugger;
  	                	 data.forEach(function(value,index){
  	                		 var consumeObj=new Object(); 
  	                		 consumeObj.name=value.itemName;
  	                		 consumeObj.value=value.money;
  	                		 consumeArr.push(consumeObj);
  	                	 })
  	                	 vm.udrawline(consumeArr);
  	                	 vm.consumeModel=true;
  	                   }
  	                  },
  	            	 });
	     	     },
	     	    getLibraryStatic:function(row){
	     	    	
	     	  	 var stuId=row.id;
	     	    	$.ajax({
	                  type:"post",
	                  url:"api/library/getLibraryStatistics",
	                  data:{stuId:stuId},
	                  dataType:'json',
	                  async:true,
	                  success:function(data) { 
	                	 debugger;
	                   if(data.resultCode==200){
	                	  debugger;
	                       vm.library=data.data; 
	                       vm.libraryModel=true;
	                   }
	                  },
	            	 });
	     	    },
	     	    toAttendance:function(row){
	     	    	debugger;
	     	    	vm.getAttendanceList(row);
	     	    	vm.attendanceModel=true;
	     	    },
	     	     getAttendanceList:function(row){
	     	    	 var stuId=row.id;
		     	    	$.ajax({
	  	                  type:"post",
	  	                  url:"api/Attendance/getAttendanceTotal",
	  	                  data:{stuId:stuId},
	  	                  dataType:'json',
	  	                  async:true,
	  	                  success:function(data) { 
	  	                	 debugger;
	  	                   if(data.resultCode==200){
	  	                	  
	  	                       vm.attendanceList=data.data; 
	  	                   }
	  	                  },
	  	            	 });
	     	     },
	    	     getScoreList:function(row){
	     	    	 var stuId=row.id;
		     	    	$.ajax({
	  	                  type:"post",
	  	                  url:"api/score/getScoreStatistics",
	  	                  data:{stuId:stuId},
	  	                  dataType:'json',
	  	                  async:true,
	  	                  success:function(data) { 
	  	                	 debugger;
	  	                   if(data.resultCode==200){
	  	                	  debugger;
	  	                       vm.scoreList=data.data; 
	  	                       vm.scoreModel=true;
	  	                   }
	  	                  },
	  	            	 });
	     	     },
	     	     getStatiscList:function(row){
  	        	   var stuId=row.id;
  	            	$.ajax({
  	                  type:"post",
  	                  url:"api/Statistics/geStatistic",
  	                  data:{stuId:stuId},
  	                  dataType:'json',
  	                  async:false,
  	                  success : function(data) { 
  	                	  debugger;
  	                	if(data.resultCode==200){
  	                		 vm.data2 = data.data;
  	  	                   vm.total1 = data.total;
  	  	                   vm.describleModel=true;
  	                	}
  	                  

  	                  },

  	            	 });
  	            },
    	           getJsonList:function(){
    	        	   var load=this.$Loading;
    	        	   load.start();
    	        	   var index = layer.load(0, {shade: false});  
    	        	   var Data = this.param;
    	            	$.ajax({
    	                  type:"post",
    	                  url:"api/student/geStudentList",
    	                  data:Data,
    	                  dataType:'json',
    	                  async:false,
    	                  success : function(data) {    	                	  
    	                   vm.data1 = data.data.result;
    	                   vm.total = data.data.total;
    	                   load.finish();
    	                   layer.close(index);
    	                  },
    	                 error :function() {
    	                	 load.error();
    	                	 alert("后台报错");
    	                  }
    	            	 });
    	            },
       	     	   save:function(row){
       	     		   var param={
       	     				   id:this.detailform.id,
       	     	   	           name:this.detailform.name,
       	     	               number:this.detailform.number,
       	     	               phone:this.detailform.phone,
       	                       year:this.detailform.year,
       	                       major:this.detailform.major
       	     				  
       	     		    }
       	          	$.ajax({
       	              type:"post",
       	              url:"api/student/save",
       	              data:param,
       	              dataType:'json',
       	             success : function(data) {  
       	              	if(data.resultCode=='200'){
       	               		 layer.msg(data.resultDesc);
       	               		 vm.getJsonList();
       	               	     vm.detailModel=false; 
       	               	    
       	               	     
       	               	}else{
       	               		 layer.msg(data.resultDesc);
       	               	}
       	              },
       	             error :function() {
       	            	 alert('后台查询出错！');
       	              }
       	        	 });
                
    	     	    }
    	     
    	   
    	        }
    	    });
    	}

      function add(){ 
    	  vm.detailform={};
    	  vm.studentId="";
    	  vm.detailModel=true; 
  
       }
       
      function search(){
    	  vm.param.name=$("#name").val();
    	  vm.getJsonList();
    	  
      }
      
      function saveinfo(){
    	  if(!vm.detailform.name){
   			   layer.msg("学生不能为空")
   			   return false;
   		   }
    	 
    	 vm.save(); 
      }
      
        	 
