 var vm;


      $(function(){
    	
    	  initVue();
          vm.getJsonList();
          laydate.render({
       	     elem: '#consumeTime'
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
    	                studentId:"",
    	                studentList:[],
    	                itemId:"",
    	                ItemList:[],
    	                detailModel:false,
    	                total:0,
    	                detailform:{},
    	                columns1: [
               {
					type : 'index',
					title : '序号',
					align : 'center'
				},
                            { title: '学生名',  key: 'stuName' },
                            { title: '学号',  key: 'number' },
                            { title: '消费项目',  key: 'itemName' },
                            { title: '消费金额',  key: 'money' },
                            { title: '消费时间',  key: 'consumeTime' },
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
    	        	this.getItemList();
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
	        	    	  this.itemId=row.itemId;
	        	    	  this.detailform.money=row.money;
	        	    	  $("#consumeTime").val(row.consumeTime);
	       	     		   this.detailModel=true;
	       	     	   },
        	     deleteRow:function(row){
	       	          	 this.$Modal.confirm({
	     	                    title: '提示框',
	     	                    content: '<p>确定删除吗？</p>',
	     	                    onOk:function(){
	     	                    	$.ajax({
	     	    	                    type:"post",
	     	    	                    url:"api/consume/delete",
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
    	                  url:"api/consume/geConsumeList",
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
    	            getItemList:function(){
    	               	$.ajax({
        	                  type:"post",
        	                  url:"api/item/getAll",
        	                  data:{},
        	                  dataType:'json',
        	                  async:true,
        	                  success : function(data) {    	                	  
        	                  vm.ItemList=data.data;
        	                  },
        	                 error :function() {
        	                	 alert("后台报错");
        	                  }
        	            	 });
    	            },
       	     	   save:function(row){
       	     		   var param={
       	     				   id:this.detailform.id,
       	     				   stuId:this.studentId,
       	     				   itemId:this.itemId,
       	     				   money:this.detailform.money,
       	     				   consumeTime:$("#consumeTime").val()
       	     			 
       	     		    }
       	          	$.ajax({
       	              type:"post",
       	              url:"api/consume/save",
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
    	  $("#consumeTime").val("");
    	  vm.studentId="";
    	  vm.itemId="";
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
      
        	 
