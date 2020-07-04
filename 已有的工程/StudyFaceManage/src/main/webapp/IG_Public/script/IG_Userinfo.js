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
    	                username:"",
    	                password:"",
    	                realname:"", 
    	                email:"",
    	                detailModel:false,
    	                detailform:{},
    	                total:0,
    	                columns1: [
               {
					type : 'index',
					title : '序号',
					align : 'center',
				 
				},
				            { title: '账号', key: 'username' },
                            { title: '密码',  key: 'password' },
                            { title: '真实姓名',  key: 'realname' },
                            { title: '邮箱',  key: 'email' },
                            { title: '身份',  key: 'type' ,
                            	render: function (h, params) {
                            		if(params.row.type=='0'){
        	                       		return  h('span', '超级管理员');
        	                       	}else if(params.row.type=='1'){
        	                       		return  h('span', '管理员');
        	                       		
        	                       	}	
                            	}
                            },
                            
                            { title: '创建时间',  key: 'createTime' },
                            { title: '状态',  key: 'isEnable',
    	                       	render: function (h, params) {
    	                       	if(params.row.isEnable=='0'){
    	                       		return  h('span', '未通过');
    	                       	}else if(params.row.isEnable=='1'){
    	                       		return  h('span', '已通过');
    	                       		
    	                       	}
    	                       	}
    	                       },
       	                    {
       	                        title: '操作',
       	                        key: 'action',
       	                        width: 310,
       	                        align: 'center',
       	                     render: function(h, params){
       	                    	var userType=$("#userType").val();
       	                 	var isEnable=params.row.isEnable;
       	                 if(userType==0&&params.row.isEnable=='0'){
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
	                                        	vm.check(params.row);
	                                        }
	                                    }
	                                }, '通过'),
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
	                          
	                                
       	                 }else if(userType==0&&params.row.isEnable=='1'){
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
                                     	vm.black(params.row);
                                     }
                                 }
                             }, '拉黑'),
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
       	                 }else if(userType!=0) {
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
                             ])
       	                 }
       	                     }
       	                     
       	                    },
    	                ],
    	               data1:[],
    	               formValidate: {
    	                  
    	                },
    	                value:''
    	                
    	            }
    	        },
    	        created:function(){
    	        	
    	        },
    	        methods:{
    	        	
    	        	addModel:function(){
    	        		this.modal=true;
    	        	},
    	            changePageNum: function (pageNum) {
    	              this.param.page = pageNum;
    	              this.getJsonList();
    	            },
    	            handleReachBottom:function() {
    	                return new Promise(function resolve(i){
    	                    setTimeout(function() {
    	                        const last = this.list1[this.list1.length - 1];
    	                        for (var i = 1; i < 11; i++) {
    	                            this.list1.push(last + i);
    	                        }
    	                        resolve();
    	                    }, 2000);
    	                });
    	            },
    	          search:function(){
          	        	   this.param.page = 1;
        	        	   this.getJsonList();
        	       },
        	     deleteRow:function(row){
	       	          	 this.$Modal.confirm({
	     	                    title: '提示框',
	     	                    content: '<p>确定删除吗？</p>',
	     	                    onOk:function(){
	     	                    	$.ajax({
	     	    	                    type:"post",
	     	    	                    url:"api/user/deleteUser",
	     	    	                    data:{"id":row.id},
	     	    	                    dataType:'json',
	     	    	                    async:false,
	     	    	                    success : function(data) {  
	     	    	                    	if(data.resultCode=='200'){
	     	    	                    		layer.msg('刪除成功!');
    	     	    	                   		vm.getJsonList();
	     	    	                   	}else{
	     	    	                   		
	     	    	                   		 layer.msg(data.resultDesc);
	     	    	                   	}
	     	    	                     
	     	    	                    },
	     	    	                   error :function() {
	     	    	                	   layer.msg('刪除失败！');
	     	    	                    }
	     	    	              	 });
	     	                    	
	     	                    }});
	     	        },
	     	        check:function(row){
	     	        	this.$Modal.confirm({
     	                    title: '提示框',
     	                    content: '<p>确定通过吗？</p>',
     	                    onOk:function(){
     	                    	$.ajax({
     	    	                    type:"post",
     	    	                    url:"api/user/updateselective",
     	    	                    data:{"id":row.id,'isEnable':'1'},
     	    	                    dataType:'json',
     	    	                    async:false,
     	    	                    success : function(data) {  
     	    	                    	if(data.resultCode=='200'){
     	    	                    		layer.msg('审核成功!');
	     	    	                   		vm.getJsonList();
     	    	                   	}else{
     	    	                   		
     	    	                   		 layer.msg(data.resultDesc);
     	    	                   	}
     	    	                     
     	    	                    },
     	    	                   error :function() {
     	    	                	   layer.msg('审核失败！');
     	    	                    }
     	    	              	 });
     	                    	
     	                    }});
	     	        
	     	        },
	     	     
	     	       
	     	        black:function(row){
	     	        	this.$Modal.confirm({
     	                    title: '提示框',
     	                    content: '<p>确定拉黑吗？</p>',
     	                    onOk:function(){
     	                    	$.ajax({
     	    	                    type:"post",
     	    	                    url:"api/user/updateselective",
     	    	                    data:{"id":row.id,'isEnable':'0'},
     	    	                    dataType:'json',
     	    	                    async:false,
     	    	                    success : function(data) {  
     	    	                    	if(data.resultCode=='200'){
     	    	                    		layer.msg('拉黑成功!');
	     	    	                   		vm.getJsonList();
     	    	                   	}else{
     	    	                   		
     	    	                   		 layer.msg(data.resultDesc);
     	    	                   	}
     	    	                     
     	    	                    },
     	    	                   error :function() {
     	    	                	   layer.msg('拉黑失败！');
     	    	                    }
     	    	              	 });
     	                    	
     	                    }});
	     	        },
	     	   
	        	    tijiao:function(row){
	
	        	    	vm.detailform={};
	       	     	       this.detailform.id=row.id;
	       	     		  this.detailform.username=row.username;
    	     			     this.detailform.password=row.password;	       	     		   
    	     		         this.detailform.realname=row.realname;
    	     		         this.detailform.email=row.email;
    	     		        $("#type").val(row.type);
   	       	     		   this.detailModel=true;
	       	     	   },
    	           getJsonList:function(){
    	        	   var load=this.$Loading;
    	        	   load.start();
    	        	   var index = layer.load(0, {shade: false}); 
    	        	  var userType=$("#userType").val();
   	        	     var id=$("#userId").val();
   	        	   if(userType!=0){
   	        		   this.param.id=id;
   	        	   }
    	        	   var Data = this.param;
    	            	$.ajax({
    	                  type:"post",
    	                  url:"api/user/getUserList",
    	                  data:Data,
    	                  dataType:'json',
    	                  async:false,
    	                  success : function(data) {  
    	                	console.log(data.data.result);
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
       	     		var load=this.$Loading;
 	        	      load.start();            	     		 
       	          	$.ajax({
       	              type:"post",
       	              url:"api/user/addUser",
       	              data:this.detailform,
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
    	  vm.detailModel=true; 
  
       }
       
      function search(){
    	  vm.param.realname=$("#name").val();
    	  vm.getJsonList();
    	  
      }
      function saveinfo(){
    	  if(!vm.detailform.username){
   			   layer.msg("账号不能为空")
   			   return false;
   		   }
   		  if(!vm.detailform.password){
  			   layer.msg("密码不能为空")
  			   return false;
  		   }
   	  if(!vm.detailform.realname){
			   layer.msg("真实姓名不能为空")
			   return false;
		   }
   	if(!vm.detailform.email){
		   layer.msg("邮箱不能为空")
		   return false;
	   }
    	 vm.save(); 
      }
   
      
        	 
