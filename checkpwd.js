// 校验用户名及密码
function checklogin(){
	var  username=document.getElementById("username").value;
	var  password=document.getElementById("password").value;
	if(username==""||username==null ){
		alert("Please enter name !");
		return false;
	}else if(username !== "admin"){
		alert("Wrong name !");
		return false;
	}else if(password==""||password==null){
		alert("Please enter password!");
		return false;
	}else if (password !="adminn"){
		alert("Wrong password !");
		return false;
	}
	return true;
}


