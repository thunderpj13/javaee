

/**
 * 注册
 */
function reigster(){
	debugger;
	var username=$("#username").val();
	var password=$("#password").val();
	var realname=$("#realname").val();
	var email=$("#email").val();
	var type=$("#userType option:selected").val();
	 if(!username){
		 layer.msg("账号不能为空");
		 return false;
	 }
	 if(!password){
		 layer.msg("密码不能为空");
		 return false;
	 }
	 if(!realname){
		 layer.msg("真实姓名不能为空");
		 return false;
	 }
	 if(!email){
		 layer.msg("邮箱不能为空");
		 return false;
	 }
	 if(!type){
		 layer.msg("用户类型不能为空");
		 return false;
	 }
	
    $.ajax({
        type: "post",
        url: "web/visitor/saveAccount",
        data: $("#reigsterForm").serialize(),
        dataType: "json",
        success: function(data){
                 if(data.flag=="true"){
                	 
                	 $("#hip").empty();               	
                     window.location.href="web/visitor/toLogin";
                 }else{
                	 $("#hip").empty();
                	 $("#hip").html(data.errorMsg);
                 }

         }

    });

}

