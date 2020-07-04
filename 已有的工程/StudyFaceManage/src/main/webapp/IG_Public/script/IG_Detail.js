 var vm;


      $(function(){
    	
    	  initVue();
          vm.getJsonList();
          laydate.render({
      	     elem: '#startTime'
      	    ,type: 'datetime'
      	 
      	    
      	   });
          
    	 laydate.render({
   	     elem: '#endTime'
   	     ,type: 'datetime' 
   	   });
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
    	                courseId:"",
    	                courseList:[],
    	                detailModel:false,
    	                total:0,
    	                detailform:{},
    	                columns1: [
               {
					type : 'index',
					title : '序号',
					align : 'center'
				},
                            { title: '课程名',  key: 'name' },
                            { title: '地址',  key: 'address' },
                            { title: '教师',  key: 'teacher' },
                            { title: '开始时间',  key: 'startTime' },
                            { title: '结束时间',  key: 'endTime' },
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
    	                        	])
    	                        	
    	                   		}}],           
    	               data1:[],
    	
    	               formValidate: {
    	                  
    	                },
    	                value:''
    	                
    	            }
    	        },
    	        created:function(){
    	        	this.getCourseList();
    	        },
    	        methods:{
    	        	
    	        	
    	            changePageNum: function (pageNum) {
    	              this.param.page = pageNum;
    	              this.getJsonList();
    	            },
    	           
    	           
    	          search:function(){
          	        	   this.param.page = 1;
        	        	   this.getJsonList();
        	       },
        	       tijiao:function(row){
	        	    	  vm.detailform={};
	        	    	  this.detailform.id=row.id;
	        	    	  this.courseId=row.courseId;
	        	    	  this.detailform.address=row.address;
	        	    	  this.detailform.teacher=row.teacher;
	        	    	  $("#startTime").val(row.startTime);
	        	    	  $("#endTime").val(row.endTime);
	       	     		   this.detailModel=true;
	       	     	   },
        	     deleteRow:function(row){
	       	          	 this.$Modal.confirm({
	     	                    title: '提示框',
	     	                    content: '<p>确定删除吗？</p>',
	     	                    onOk:function(){
	     	                    	$.ajax({
	     	    	                    type:"post",
	     	    	                    url:"api/detail/delete",
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
	     	     
    	           getJsonList:function(){
    	        	   var load=this.$Loading;
    	        	   load.start();
    	        	   var index = layer.load(0, {shade: false});  
    	        	   var Data = this.param;
    	            	$.ajax({
    	                  type:"post",
    	                  url:"api/detail/geDetailList",
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
    	            getCourseList:function(){
    	            	debugger;
    	        	   var load=this.$Loading;
    	        	   load.start();
    	        	   var index = layer.load(0, {shade: false});  
    	        	   var Data = this.param;
    	            	$.ajax({
    	                  type:"post",
    	                  url:"api/course/getAll",
    	                  data:Data,
    	                  dataType:'json',
    	                  async:true,
    	                  success : function(data) {   
    	                   vm.courseList = data.data;
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
       	     		   var courseName=$("#modalCourseId option:selected").text();
       	     		   var param={
       	     				   id:this.detailform.id,
       	     				   courseId:this.courseId,
       	     				   name:courseName,
       	     				   address:this.detailform.address,
       	     				   teacher:this.detailform.teacher,
       	     				   startTime:$("#startTime").val(),
       	     				   endTime:$("#endTime").val()  
       	     		    }
       	     
       	          	$.ajax({
       	              type:"post",
       	              url:"api/detail/save",
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
    	  debugger;
    	  vm.detailform={};
    	  vm.courseId="";
    	  $("#startTime").val("");
    	  $("#endTime").val("");
    	  vm.detailModel=true; 
  
       }
       
      function search(){
    	  vm.param.name=$("#name").val();
    	  vm.getJsonList();
    	  
      }
      
      function saveinfo(){
    	  if(!vm.courseId){
   			   layer.msg("课程名不能为空")
   			   return false;
   		   }
    	 
    	 vm.save(); 
      }
     
      
        	 
