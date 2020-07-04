<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="/WEB-INF/page/common/IG_Scheme.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en"><head>
<base href="<%=basePath%>">
    <meta charset="utf-8">
    <title>管理员信息</title>
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href='IG_Public/stylesheets/base.css' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="IG_Public/lib/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="IG_Public/lib/font-awesome/css/font-awesome.css">
     <script src="IG_Public/lib/iview/vue.min.js" type="text/javascript"></script>
    <link rel="stylesheet" href="IG_Public/lib/iview/iview.css">
    <script src="IG_Public/lib/iview/iview.min.js" type="text/javascript"></script>
    <script src="IG_Public/lib/jquery-1.11.1.min.js" type="text/javascript"></script>
     <script type="text/javascript" src="IG_Public/script/IG_Userinfo.js"></script>
      <script type="text/javascript" src="IG_Public/lib/layer/layer.js"></script>
      <script type="text/javascript" src="IG_Public/lib/laydate/laydate.js"></script>
    <script src="IG_Public/lib/jQuery-Knob/js/jquery.knob.js" type="text/javascript"></script>
    <script type="text/javascript">
        $(function() {
            $(".knob").knob();
        });
    </script>


    <link rel="stylesheet" type="text/css" href="IG_Public/stylesheets/theme.css">
    <link rel="stylesheet" type="text/css" href="IG_Public/stylesheets/premium.css">

</head>
<body class=" theme-blue">

    <jsp:include page="/WEB-INF/page/common/IG_ManageHeader.jsp"></jsp:include>
    
    <jsp:include page="/WEB-INF/page/common/IG_LeftMenu.jsp"></jsp:include>


    <div class="content">
             <div class="header">
            
            <h1 class="page-title">读者信息</h1>
                    <ul class="breadcrumb">
            <li><a href="javascript:void(0)">主页</a> </li>
            <li class="active">读者信息</li>
        </ul>

        </div>
        		
      <div class="btn-toolbar list-toolbar">
       <c:if test="${cspUser.type eq 0}">
      <div class="row">
								<div class="col-lg-4">
									<div class="input-group">
										
										<span class="input-group-btn">
											<button class="btn btn-default" type="button">姓名</button>
										</span> <input type="text" class="form-control" placeholder="请输入姓名"	id="name">
									
									</div>
								</div>
								 
								<div class="col-lg-4">
								 <button class="btn btn-primary" style="margin:20px;" onclick="search()"><i class="fa fa-search"></i>查询</button>
								  <button  class="btn btn-primary"  onclick="add()"><i class="fa fa-plus"></i>新增</button> 
								</div>
							</div>
							
		
	
         </c:if>
          <input style="display:none"  id="userType" value=${cspUser.type}>
        <input style="display:none"  id="userId" value=${cspUser.id}>
      </div>  	
        <div class="contant" id="vueBox" v-cloak>
				<div class="tbDiv">
		
				  <i-table border stripe :columns="columns1" :data="data1"></i-table>
                  <Page :total="total" :current="param.page" :page-size="param.rows" @on-change="changePageNum" show-total show-elevator></Page>
                 </div>
                 
           <Modal v-model="detailModel" draggable scrollable title="读者信息" @on-ok="save" >
                          
                                   <i-form v-model="detailform" label-position="left" :label-width="100">                        
                                        <c:if test="${cspUser.type eq 0}">
                                      <Form-item label="账号">
                                         <i-input v-model="detailform.username"  data-options="required:true" id="username" placeholder="请输入手机号或者邮箱" style="width:380px;border:1px solid #dddee1;">
                                      </Form-item>
                                         </c:if>
                                         <c:if test="${cspUser.type ne 0}">
                                            <Form-item label="账号">
                                         <i-input v-model="detailform.username" readonly=true data-options="required:true" id="username" placeholder="请输入手机号或者邮箱" style="width:380px;border:1px solid #dddee1;">
                                      </Form-item>
                                       </c:if>
                                       <Form-item label="密码">
                                         <i-input v-model="detailform.password"  id="password" placeholder="请输入密码" style="width:380px;border:1px solid #dddee1;">
                                          </Form-item>
                             
                                     <c:if test="${cspUser.type eq 0}">
                                      <Form-item label="真实姓名">
                                             <i-input v-model="detailform.realname" id="realname" style="width:380px;border:1px solid #dddee1;" placeholder="请输入真实姓名"></input>
                                     </Form-item> 
                                                                  
                                      </c:if>
                                        <c:if test="${cspUser.type ne 0}">
                                         <Form-item label="真实姓名">
                                             <i-input v-model="detailform.realname" readonly=true id="realname" style="width:380px;border:1px solid #dddee1;" placeholder="请输入真实姓名"></input>
                                     </Form-item> 
                                                                                               
                                      </c:if>
                                       <Form-item label="邮箱">
                                         <i-input v-model="detailform.email"  data-options="required:true" id="email" placeholder="请输入手机号或者邮箱" style="width:380px;border:1px solid #dddee1;">
                                      </Form-item>
                           </i-form>
                           <div slot="footer">
                            <button class="esayui-linkbutton" style="margin-left:40px"onclick="saveinfo()">保存</button>
		<!-- <button style="margin-left:20px"  class="esayui-linkbutton" onclick="reset()">重置</button> -->
		</div>
                 </Modal>
      
                 
              
        </div>
    </div>
 

  <jsp:include page="/WEB-INF/page/common/IG_Footer.jsp"></jsp:include>
    
  
</body></html>

<style>
.file-list{
list-style: none;
}
  [v-cloak] {

    display: none;

  }
</style>


