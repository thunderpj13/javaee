<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 
<%@ include file="/WEB-INF/page/common/IG_Scheme.jsp" %>

<base href="<%=basePath%>"/>
<meta http-equiv="X-UA-Compatible" content="IE=10">
   <!--  <script src="IG_Public/lib/jquery-1.11.1.min.js" type="text/javascript"></script> -->
     <div class="sidebar-nav">
    <ul>
     <c:if test="${cspUser.type eq 0}"><!-- 管理员 -->
        <li><a href="javascript:void(0)"  data-target=".chu-menu" class="nav-header collapsed" data-toggle="collapse" ><i  class="fa fa-fw fa-dashboard"></i>超级管理员<i class="fa fa-collapse"></i></a></li>
        <li><ul  class="chu-menu nav nav-list  "> 
        <li > <a href="web/manage/toStudentInfo"><span class="fa fa-caret-right"></span>学生信息</li>  
             <li ><a href="web/manage/toUserinfo"><span class="fa fa-caret-right"></span>管理员信息</a></li> 
              <li ><a href="web/manage/toItemInfo"><span class="fa fa-caret-right"></span>消费项目信息</a></li> 
               <li > <a href="web/manage/toCourseInfo"><span class="fa fa-caret-right"></span>课程信息</li>    
           <li > <a href="web/manage/toDetailInfo"><span class="fa fa-caret-right"></span>课程详情</li>  
                    </ul></li>  
                       <li><ul  class="chu-menu nav nav-list  "> 
             <li><a href="javascript:void(0)"  data-target=".chuqin-menu" class="nav-header collapsed"  data-toggle="collapse"><i class="fa fa-fw fa-dashboard"></i>校园数据记录<i class="fa fa-collapse"></i></a></li>
                     <li ><a href="web/manage/toConsumeInfo"><span class="fa fa-caret-right"></span>消费记录</a></li> 
            <li ><a href="web/manage/toAttedanceInfo"><span class="fa fa-caret-right"></span>出勤记录</a></li>    
           <li > <a href="web/manage/toLibraryInfo"><span class="fa fa-caret-right"></span>图书馆进出记录</li> 
           <li > <a href="web/manage/toScoreInfo"><span class="fa fa-caret-right"></span>成绩记录</li>  
                      
                   </ul></li>  
     
    </c:if>
     <c:if test="${cspUser.type eq 1}">
        <li><a href="javascript:void(0)"  data-target=".chu-menu" class="nav-header collapsed" data-toggle="collapse" ><i  class="fa fa-fw fa-dashboard"></i>管理员<i class="fa fa-collapse"></i></a></li>
        <li><ul  class="chu-menu nav nav-list  "> 
        <li > <a href="web/manage/toStudentInfo"><span class="fa fa-caret-right"></span>学生信息</li>  
              <li ><a href="web/manage/toItemInfo"><span class="fa fa-caret-right"></span>消费项目信息</a></li> 
               <li > <a href="web/manage/toCourseInfo"><span class="fa fa-caret-right"></span>课程信息</li>    
           <li > <a href="web/manage/toDetailInfo"><span class="fa fa-caret-right"></span>课程详情</li>
             <li ><a href="web/manage/toUserinfo"><span class="fa fa-caret-right"></span>个人信息</a></li>   
                    </ul></li>  
                       <li><ul  class="chu-menu nav nav-list  "> 
             <li><a href="javascript:void(0)"  data-target=".chuqin-menu" class="nav-header collapsed"  data-toggle="collapse"><i class="fa fa-fw fa-dashboard"></i>校园数据记录<i class="fa fa-collapse"></i></a></li>
                     <li ><a href="web/manage/toConsumeInfo"><span class="fa fa-caret-right"></span>消费记录</a></li> 
            <li ><a href="web/manage/toAttedanceInfo"><span class="fa fa-caret-right"></span>出勤记录</a></li>    
           <li > <a href="web/manage/toLibraryInfo"><span class="fa fa-caret-right"></span>图书馆进出记录</li> 
           <li > <a href="web/manage/toScoreInfo"><span class="fa fa-caret-right"></span>成绩记录</li>  
                      
                   </ul></li>  
     
    </c:if>
 
   </ul> 

  </div>
  
  
      <script type="text/javascript">
      
       
      $(function(){

    	  var list = $('.sidebar-nav').find('ul').find('li');
    	  for(var i = 0; i < list.length; i++) {
    		  if(window.location.pathname=="/"+$(list[i]).find("a").attr("href")){
    			  $(list[i]).addClass("active");
    			  if($(list[i]).parent("ul").length>0){
    				  $(list[i]).parent("ul").addClass("in");
    			  }
    		  }
            }
    	  
    	  
    	  
    	
      }) 
      
      
      


    </script>