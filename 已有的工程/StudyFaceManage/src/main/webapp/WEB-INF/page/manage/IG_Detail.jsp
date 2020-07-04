<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="/WEB-INF/page/common/IG_Scheme.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en"><head>
<base href="<%=basePath%>">
    <meta charset="utf-8">
    <title>课程详情</title>
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
     <script type="text/javascript" src="IG_Public/script/IG_Detail.js"></script>
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
            
            <h1 class="page-title">课程详情</h1>
                    <ul class="breadcrumb">
            <li><a href="javascript:void(0)">主页</a> </li>
            <li class="active">课程详情</li>
        </ul>

        </div>
        		
      <div class="btn-toolbar list-toolbar">
     
      <div class="row">
								<div class="col-lg-4">
									<div class="input-group">
										
										<span class="input-group-btn">
											<button class="btn btn-default" type="button">课程名</button>
										</span> <input type="text" class="form-control" placeholder="请输入课程名"	id="name">
									
									</div>
								</div>
								 
								<div class="col-lg-4">
								<button class="btn btn-primary" style="margin:20px;" onclick="search()"><i class="fa fa-search"></i>查询</button>
								  <button  class="btn btn-primary"  onclick="add()"><i class="fa fa-plus"></i>新增</button> 
								</div>
							</div>	
	
	
      </div>  	
        <div class="contant" id="vueBox" v-cloak>
				<div class="tbDiv">
		
				  <i-table border stripe :columns="columns1" :data="data1"></i-table>
                  <Page :total="total" :current="param.page" :page-size="param.rows" @on-change="changePageNum" show-total show-elevator></Page>
                 </div>
                 
           <Modal v-model="detailModel" scrollable title="课程详情" @on-ok="save" >
                                   <i-form v-model="detailform" label-position="left" :label-width="100">   
                                        <Form-item label="课程名:">
		 			            <select id="modalCourseId"   v-model="courseId"  style="width:100%;border:1px solid #dddee1;padding:5px;border-radius:4px;font-size:14px;" >
						        <Option v-for="item in  courseList" :value="item.id" :key="item.id">{{item.name }}</Option>
						       
					             </select>
                                     </Form-item>   
                                       <Form-item label="教室">
                                         <i-input v-model="detailform.address"  id="address" placeholder="请输入教室" style="width:380px;border:1px solid #dddee1;">
                                          </Form-item>       
                                       <Form-item label="教师">
                                         <i-input v-model="detailform.teacher"  id="teacher" placeholder="请输入教师" style="width:380px;border:1px solid #dddee1;">
                                          </Form-item>  

                                         <Form-item label="开放时间:">
                                         <input   id="startTime" placeholder="请选择开放时间" style="width:100%;border:1px solid #dddee1;">
                                          </Form-item>
                                          <Form-item label="结束时间:">
                                         <input   id="endTime" placeholder="请选择结束时间" style="width:100%;border:1px solid #dddee1;">
                                          </Form-item>
                           </i-form>
                           <div slot="footer">
                            <button style="margin-left:20px;margin-top:10px;"  class="btn btn-primary"  onclick="saveinfo()">保存</button>   
		
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


