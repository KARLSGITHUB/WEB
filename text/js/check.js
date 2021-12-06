// JavaScript Document
function adminCheck()    //检测admin账号密码
{
	var psw = document.getElementById("adminPassword").value;
	if(psw=="123456")
	{
		jumpRegister();
	}
	else
	{
		alert("密码错误！请重新输入！")
	}
	
}