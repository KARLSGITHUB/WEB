// JavaScript Document
function adminInsertTeacher()
{

	createUserTable();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var occupation = document.getElementById("occupation").value;
	DB.transaction(function(tx){
		tx.executeSql(
			'insert into TEACHER (TUSERNAME,TPASSWORD,TOCCUPATION) values(?,?,?)',
			[username,password,occupation],
			function(tx,rs){
				alert('添加成功');
			},
			function(tx,error){
				alert('添加失败'+error.source + ":" + error.message);
			}
		);
	});
}

function adminInsertStudent()
{

	createStudentTable();
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var occupation = document.getElementById("occupation").value;
	DB.transaction(function(tx){
		tx.executeSql(
			'insert into STUDENT (SUSERNAME,SPASSWORD,SOCCUPATION) values(?,?,?)',
			[username,password,occupation],
			function(tx,rs){
				alert('添加成功');
			},
			function(tx,error){
				alert('添加失败'+error.source + ":" + error.message);
			}
		);
	});
}

function adminInsertGrade()
{

	createStudentTable();
	var sname = document.getElementById("sname").value;
	var chinese = document.getElementById("chinese").value;
	var math = document.getElementById("math").value;
	DB.transaction(function(tx){
		tx.executeSql(
			'insert into GRADE (SNAME,CHINESE,MATH) values(?,?,?)',
			[sname,chinese,math],
			function(tx,rs){
				alert('添加成功');
			},
			function(tx,error){
				alert('添加失败'+error.source + ":" + error.message);
			}
		);
	});
}

