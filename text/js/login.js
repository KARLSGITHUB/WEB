// JavaScript Document

function teacherlogin()
{
	createUserTable();
	var teacherUserName = document.getElementById("teacherName").value;
	var teacherPassword = document.getElementById("teacherPassword").value;
	DB.transaction(function(tx){
		tx.executeSql(
			'select * from TEACHER where TUSERNAME=? and TPASSWORD=?',
			[teacherUserName,teacherPassword],
			function(tx,rs){
				if (rs.rows.length==0) //未查询到指定用户名与密码的用户信息
				{
					alert("登录失败");
				}
				else
				{
				
					jumpenter();
				}
			}
		);
	});
}


function studentlogin()
{
	createStudentTable();
	var studentName = document.getElementById("studentName").value;
	var studentPassword = document.getElementById("studentPassword").value;
	DB.transaction(function(tx){
		tx.executeSql(
			'select * from STUDENT where SUSERNAME=? and SPASSWORD=?',
			[studentName,studentPassword],
			function(tx,rs){
				if (rs.rows.length==0) //未查询到指定用户名与密码的用户信息
				{
					alert("登录失败");
				}
				else
				{
				
					jumpquery();
					
				}
			}
		);
	});
}