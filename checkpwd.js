// 校验用户名及密码
function checklogin(){
	var  username=document.getElementById("username").value;
	var  password=document.getElementById("password").value;
	if(username==""||username==null ){
		alert("请输入用户名 !");
		return false;
	}else if(password==""||password==null){
		alert("请输入密码 !");
		return false;
	}else if(username != "xiaochuang" || password != "xiaochuang"){
		alert("用户名或密码错误 !");
		return false;
	}
	return true;
}
function test_service(){
	
String service_ip = resuest.getServerName();
      alert("获取到的service_ip为："+service_ip);
}


