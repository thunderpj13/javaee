$(function(){

$("#sendRegMessage").click(function(){
	
	getRegMessageCode();
	
})

$("#myCarousel").carousel('cycle');
$("#myCarousel").carousel('next');


$("input[name='username']").keydown(function(event){
    if (event.keyCode == 13) login();
});

$("input[name='password']").keydown(function(event){
    if (event.keyCode == 13) login();
});

})	




/**
 * 登录
 */
function login(){

	var userType=$('#userType option:selected') .val();
	$("#loginform").bootstrapValidator('validate');//提交验证
    if ($("#loginform").data('bootstrapValidator').isValid()) {//获取验证结果，如果成功，执行下面代码
    $.ajax({
        type: "post",
        url: "web/visitor/userLogin",
        data: $("#loginform").serialize(),
        dataType: "json",
        success: function(data){
                 if(data.flag){
                	 if(userType==data.userType.toString()){
                		 $("#hip").empty();
                    	 if(data.userType==0){//超级管理员
                    		 window.location.href="web/manage/toStudentInfo";
                    	 }else if(data.userType==1){//管理员
                    		 window.location.href="web/manage/toStudentInfo";
                    	 }
                	 }else{
                		 $("#hip").empty();
                    	 $("#hip").html("身份不符，请重新选择"); 
                	 }
                 }else{
                	 $("#hip").empty();
                	 $("#hip").html(data.resultMsg);
                 }

         }

    });
      }

}





