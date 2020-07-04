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
    	                studentList:[],
    	                studentId:"",
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
				            { title: '学号',  key: 'number' },
                            { title: '学生名',  key: 'stuName' },
                            { title: '课程名',  key: 'courseName' },
                            { title: '分数',  key: 'score' },
                            { title: '创建时间',  key: 'createTime' },
    	                    {
    	                        title: '操作',
    	                        key: 'action',
    	                        width: 310,
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
    	        	
    	        	this.getStudentList();
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
	       	     	      this.studentId=row.stuId;
	       	     	      this.courseId=row.courseId;
	       	     	      this.detailform.score=row.score;
	       	     		   this.detailModel=true;
	       	     	   },
        	     deleteRow:function(row){
	       	          	 this.$Modal.confirm({
	     	                    title: '提示框',
	     	                    content: '<p>确定删除吗？</p>',
	     	                    onOk:function(){
	     	                    	$.ajax({
	     	    	                    type:"post",
	     	    	                    url:"api/score/delete",
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
    	                  url:"api/score/geScoreList",
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
    	            getStudentList:function(){
    	               	$.ajax({
      	                  type:"post",
      	                  url:"api/student/getAll",
      	                  data:{},
      	                  dataType:'json',
      	                  async:true,
      	                  success : function(data) {    	                	  
      	                  vm.studentList=data.data;
      	                  },
      	                 error :function() {
      	                	 alert("后台报错");
      	                  }
      	            	 });
    	            },
    	            getCourseList:function(){
    	            	$.ajax({
    	                  type:"post",
    	                  url:"api/course/getAll",
    	                  data:{},
    	                  dataType:'json',
    	                  async:true,
    	                  success : function(data) {   
    	                   vm.courseList = data.data;

    	                  },
    	                 error :function() {
    
    	                  }
    	            	 });
    	            },
       	     	   save:function(row){
       	     		   var param={
       	     				   id:this.detailform.id,
       	     				   stuId:this.studentId,
       	     				   courseId:this.courseId,
       	     				   score:this.detailform.score	  
       	     		    }
       	          	$.ajax({
       	              type:"post",
       	              url:"api/score/save",
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
    	  vm.courseId="";
    	  vm.detailModel=true; 
  
       }
       
      function search(){
    	  vm.param.stuName=$("#name").val();
    	  vm.param.number=$("#number").val();
    	  vm.getJsonList();
    	  
      }
      
      function saveinfo(){
    	 /* if(!vm.detailform.name){
   			   layer.msg("学生不能为空")
   			   return false;
   		   }*/
    	 
    	 vm.save(); 
      }
      
        	 
